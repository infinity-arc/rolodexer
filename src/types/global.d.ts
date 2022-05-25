

declare interface ICard {
	[field: string]: any;
}

declare interface ICards {
	index: number[],
	cards: ICard[]
}
