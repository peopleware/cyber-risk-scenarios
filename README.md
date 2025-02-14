# cyber-risk-scenarios

A registry of risk scenarios cyber systems might be exposed to. To determine the risk a given scenario poses, you should
assess the impact and the likelihood of the scenario occurring.

The risk scenarios are focussed on a specific type of component of cyber systems. A cyber system as a whole combines
instances of different types. The risk scenarios, and types of components covered are expected to evolve. When scenarios
are proposed that are only applicable to some subtypes of a type of component, separate lists for the subtypes will be
created.

Risk scenarios are described in YAML files, with references to the topics they cover in standards.

This registry is far from complete. The hope is that it will grow and become relevant through submissions of many
topical experts. At some time, a governance structure might become necessary.

## Development

Execute

> npm install

to install development tools.

### Formatting

This repository is set up for use in IntelliJ IDEAs. YAML and Markdown files are formatted when saved using [Prettier].
Support for other ideas can be added.

### Testing

The syntactical correctness of the YAML files is validated with

> npm test

This validates the YAML files against [Joi] schemata.

_**MUDO:** A CI system should be set up._

## License

Cyber Risk Scenarios © 2025 by Jan Dockx, PeopleWare n.v. is licensed under [CC BY-SA 4.0].

[prettier]: https://www.npmjs.com/package/prettier
[joi]: https://joi.dev/
[CC BY-SA 4.0]: https://creativecommons.org/licenses/by-sa/4.0/
