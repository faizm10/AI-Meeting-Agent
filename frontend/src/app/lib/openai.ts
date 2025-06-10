// src/lib/openai.ts
import OpenAI from "openai";

export const openai = new OpenAI({
  organization: process.env.OPENAI_ORG,
  apiKey: process.env.OPENAI_API_KEY,
  project: 'proj_AzRJfVvydeBLdYp788y6RbGA'

});
