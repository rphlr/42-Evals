.PHONY: test
test:
	./vendor/bin/phpunit --coverage-text

.PHONY: clean
clean:
	-rm tests/user_agents.json
	touch tests/user_agents.json

.PHONY: generate
generate:
	php bin/user_agent_sorter.php > tests/user_agents.tmp.json && mv tests/user_agents.tmp.json tests/user_agents.dist.json
	php bin/constant_generator.php

.PHONY: init
init:
	php bin/init_user_agent.php > tests/user_agents.tmp.json && mv tests/user_agents.tmp.json tests/user_agents.dist.json
	make generate
