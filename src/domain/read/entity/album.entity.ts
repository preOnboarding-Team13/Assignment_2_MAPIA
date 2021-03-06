import { Node } from "neo4j-driver";

export class Album {
	constructor(private readonly node: Node) {}

	getId() {
		return (this.node.properties as Record<string, any>).id;
	}

	getName() {
		return (this.node.properties as Record<string, any>).name;
	}

	getReleaseDate() {
		return (this.node.properties as Record<string, any>).releaseDate;
	}

	toJson() {
		return {
			...this.node.properties
		};
	}
}
