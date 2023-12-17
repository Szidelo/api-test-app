class Article {
	public authors: string[];
	public body: string;
	public dataType: string;
	public date: string;
	public dateTime: string;
	public dateTimePub: string;
	public eventUri: string;
	public image: string;
	public isDuplicate: boolean;
	public lang: string;
	public relevance: number;
	public sentiment: number;
	public source: object;
	public time: string;
	public title: string;
	public uri: string;
	public url: string;
	public wgt: number;

	constructor(
		authors: string[],
		body: string,
		dataType: string,
		date: string,
		dateTime: string,
		dateTimePub: string,
		eventUri: string,
		image: string,
		isDuplicate: boolean,
		lang: string,
		relevance: number,
		sentiment: number,
		source: object,
		time: string,
		title: string,
		uri: string,
		url: string,
		wgt: number
	) {
		this.authors = authors;
		this.body = body;
		this.dataType = dataType;
		this.date = date;
		this.dateTime = dateTime;
		this.dateTimePub = dateTimePub;
		this.eventUri = eventUri;
		this.image = image;
		this.isDuplicate = isDuplicate;
		this.lang = lang;
		this.relevance = relevance;
		this.sentiment = sentiment;
		this.source = source;
		this.time = time;
		this.title = title;
		this.uri = uri;
		this.url = url;
		this.wgt = wgt;
	}
}

export default Article