<?php

function getDeviceType($userAgent)
{
	$detect = new Mobile_Detect;
	$detect->setUserAgent($userAgent);

	if ($detect->isMobile()) {
		return "Mobile";
	} elseif ($detect->isTablet()) {
		return "Tablet";
	} else {
		return "Desktop";
	}
}

function isMobileDevice()
{
	$userAgent = strtolower($_SERVER['HTTP_USER_AGENT']);
	return strpos($userAgent, 'mobile') !== false || strpos($userAgent, 'android') !== false;
}

// Masking IP addresses
function maskIp($ip)
{
	if ($ip == 'Data not collected')
		return $ip;
	$start = substr($ip, 0, 4);
	$end = substr($ip, -4);
	return $start . str_repeat('*', min(5, strlen($ip) - 8)) . $end;
}

// Function to display tables
function displayTable($result, $headers, $tableId)
{
	if ($result->num_rows > 0) {
		echo "<table id='$tableId' border='1'>";
		echo "<tr>";
		foreach ($headers as $index => $header) {
			echo "<th onclick='sortTable($index, \"$tableId\")'>$header</th>";
		}
		echo "</tr>";

		$rowCount = 0;
		while ($row = $result->fetch_assoc()) {
			$style = $rowCount < 5 ? "" : "style='display: none;'";
			echo "<tr class='table-row' $style>";
			$firstColumnValue = $row[array_keys($row)[0]];
			if (array_keys($row)[0] == 'ip_address') {
				echo "<td>" . htmlspecialchars(maskIp($firstColumnValue), ENT_QUOTES, 'UTF-8') . "</td>";
			} else {
				echo "<td>" . htmlspecialchars($firstColumnValue ?? 'Data not collected', ENT_QUOTES, 'UTF-8') . "</td>";
			}
			echo "<td>" . htmlspecialchars($row["total_attempts"] ?? 'Data not collected', ENT_QUOTES, 'UTF-8') . "</td>";
			echo "<td>" . htmlspecialchars($row["failed"] ?? 'Data not collected', ENT_QUOTES, 'UTF-8') . "</td>";
			echo "<td>" . htmlspecialchars($row["successful"] ?? 'Data not collected', ENT_QUOTES, 'UTF-8') . "</td>";
			echo "</tr>";
			$rowCount++;
		}
		echo "</table>";
		if ($rowCount > 5)
			echo "<button onclick='loadMoreRows(\"$tableId\")'>Load More</button>";
	} else
		echo "No data available";
}

function displayTotalTable($result, $headers, $tableId)
{
	if ($result->num_rows > 0) {
		echo "<table id='$tableId' border='1'>";
		echo "<tr>";
		foreach ($headers as $index => $header) {
			echo "<th onclick='sortTable($index, \"$tableId\")'>$header</th>";
		}
		echo "</tr>";

		$rowCount = 0;
		while ($row = $result->fetch_assoc()) {
			$style = $rowCount < 5 ? "" : "style='display: none;'";
			echo "<tr id='totalsRow' class='table-row' $style>";
			echo "<td>" . htmlspecialchars($row["total_attempts"] ?? 'Data not collected', ENT_QUOTES, 'UTF-8') . "</td>";
			echo "<td>" . htmlspecialchars($row["failed"] ?? 'Data not collected', ENT_QUOTES, 'UTF-8') . "</td>";
			echo "<td>" . htmlspecialchars($row["successful"] ?? 'Data not collected', ENT_QUOTES, 'UTF-8') . "</td>";
			echo "</tr>";
			$rowCount++;
		}
		echo "</table>";
		if ($rowCount > 5)
			echo "<button onclick='loadMoreRows(\"$tableId\")'>Load More</button>";
	} else
		echo "No data available";
}


function generatePrefix($uri)
{
	$depth = substr_count(trim($uri, '/'), '/');
	return str_repeat('../', $depth);
}

?>