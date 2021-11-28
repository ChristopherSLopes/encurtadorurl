import { prop, Typegoose } from '@hasezoey/typegoose'
//Não consegui instalar.

export class URL extends Typegoose {
	@prop({ required: true })
	hash: string

	@prop({ required: true })
	originURL: string

	@prop({ required: true })
	shortURL: string
}

export const URLModel = new URL().getModelForClass(URL)