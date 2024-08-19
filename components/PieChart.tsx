import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend, Sector } from 'recharts';

interface PieChartProps {
  data: Array<{
    name: string;
    value: number;
    color: string;
  }>;
}

const renderActiveShape = (props: any) => {
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
  const RADIAN = Math.PI / 180;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const ex = cx + (outerRadius + 30) * cos;
  const ey = cy + (outerRadius + 30) * sin;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius + 10}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">
        {`${payload.name}: ${value} (${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

const PieChartComponent: React.FC<PieChartProps> = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState<number | undefined>(undefined);
  const [filteredData, setFilteredData] = useState(data);
  const [selectedCampuses, setSelectedCampuses] = useState<string[]>([]);

  useEffect(() => {
    if (selectedCampuses.length === 0) {
      setFilteredData(data);
    } else {
      setFilteredData(data.filter(item => selectedCampuses.includes(item.name)));
    }
  }, [selectedCampuses, data]);

  const onPieEnter = (_: any, index: number) => {
    setActiveIndex(index);
  };

  const onPieLeave = () => {
    setActiveIndex(undefined);
  };

  const handleLegendClick = (entry: any) => {
    const { dataKey } = entry;
    setSelectedCampuses(prev => 
      prev.includes(dataKey) 
        ? prev.filter(item => item !== dataKey)
        : [...prev, dataKey]
    );
  };

  return (
    <div>
      <ResponsiveContainer width="100%" height={500}>
        <PieChart>
          <Pie
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            data={filteredData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={80}
            outerRadius={140}
            fill="#8884d8"
            onMouseEnter={onPieEnter}
            onMouseLeave={onPieLeave}
          >
            {filteredData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => `${value} users`} />
          <Legend 
            layout="horizontal" 
            align="center" 
            verticalAlign="bottom"
            onClick={handleLegendClick}
            onMouseEnter={(e) => {
              const index = filteredData.findIndex(item => item.name === e.dataKey);
              setActiveIndex(index);
            }}
            onMouseLeave={() => setActiveIndex(undefined)}
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="mt-4">
        <h3 className="font-bold">Filter Campuses:</h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {data.map(campus => (
            <button
              key={campus.name}
              onClick={() => handleLegendClick({ dataKey: campus.name })}
              className={`px-2 py-1 rounded ${
                selectedCampuses.includes(campus.name) ? 'bg-blue-500 text-white' : 'bg-gray-200'
              }`}
            >
              {campus.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PieChartComponent;