import { Node } from "neo4j-driver";

export class Musician {
	constructor(private readonly node: Node) {}

	getName() {
		return (this.node.properties as Record<string, any>).name;
	}

	getCompany() {
		return (this.node.properties as Record<string, any>).Company;
	}

	toJson() {
		return {
			...this.node.properties
		};
	}
}
