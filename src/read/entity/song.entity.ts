import { Node } from "neo4j-driver";

export class Song {
	constructor(private readonly node: Node) {}

	getId() {
		return (this.node.properties as Record<string, any>).id;
	}

	getName() {
		return (this.node.properties as Record<string, any>).name;
	}

	getGenre() {
		return (this.node.properties as Record<string, any>).genre;
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
