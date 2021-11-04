import { Node } from "neo4j-driver";

export class Song {
	constructor(private readonly node: Node) {}

	getName() {
		return (this.node.properties as Record<string, any>).name;
	}

	getRunningTime() {
		return (this.node.properties as Record<string, any>).runningTime;
	}

	toJson() {
		return {
			...this.node.properties
		};
	}
}
