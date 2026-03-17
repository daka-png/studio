'use server';
/**
 * @fileOverview An AI agent to generate concise and impactful project descriptions for a portfolio.
 *
 * - generateProjectDescription - A function that handles the project description generation process.
 * - GenerateProjectDescriptionInput - The input type for the generateProjectDescription function.
 * - GenerateProjectDescriptionOutput - The return type for the generateProjectDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateProjectDescriptionInputSchema = z.object({
  projectName: z.string().describe('The name of the project.'),
  technologiesUsed: z
    .string()
    .describe('A comma-separated list of technologies, frameworks, and languages used in the project.'),
  projectGoal: z.string().describe('The main objective or problem the project aims to solve.'),
  keyFeatures: z
    .string()
    .describe('A comma-separated list of the most important or unique features of the project.'),
});
export type GenerateProjectDescriptionInput = z.infer<
  typeof GenerateProjectDescriptionInputSchema
>;

const GenerateProjectDescriptionOutputSchema = z.object({
  description: z
    .string()
    .describe(
      'A concise, impactful, and professional project description suitable for a developer portfolio. Highlight the project\'s purpose, key technologies, and standout features in 2-3 sentences.'
    ),
});
export type GenerateProjectDescriptionOutput = z.infer<
  typeof GenerateProjectDescriptionOutputSchema
>;

export async function generateProjectDescription(
  input: GenerateProjectDescriptionInput
): Promise<GenerateProjectDescriptionOutput> {
  return generateProjectDescriptionFlow(input);
}

const generateProjectDescriptionPrompt = ai.definePrompt({
  name: 'generateProjectDescriptionPrompt',
  input: {schema: GenerateProjectDescriptionInputSchema},
  output: {schema: GenerateProjectDescriptionOutputSchema},
  prompt: `You are an expert technical writer and marketer specializing in creating compelling project descriptions for developer portfolios.

Your task is to generate a concise and impactful project description (2-3 sentences) based on the provided technical details. The description should:
- Clearly state the project's purpose or problem it solves.
- Highlight the key technologies used.
- Emphasize unique or important features.
- Be professional and suitable for attracting potential employers or collaborators.

Project Name: {{{projectName}}}
Technologies Used: {{{technologiesUsed}}}
Project Goal: {{{projectGoal}}}
Key Features: {{{keyFeatures}}}

Please generate the project description in the specified JSON format.`,
});

const generateProjectDescriptionFlow = ai.defineFlow(
  {
    name: 'generateProjectDescriptionFlow',
    inputSchema: GenerateProjectDescriptionInputSchema,
    outputSchema: GenerateProjectDescriptionOutputSchema,
  },
  async input => {
    const {output} = await generateProjectDescriptionPrompt(input);
    return output!;
  }
);
