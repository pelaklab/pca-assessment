type Link = {
    name: string;
    path: string
}

export type AssessmentState = 'not-started' | 'instructions' | 'active' | 'finished';

export const assessments: Link[] = [
    { 'name': 'Poppelreuter-Ghent Overlapping Figures', 'path': '/assessments/poppelreuter-ghent' },
    { 'name': 'Navon Figures', 'path': '/assessments/navon' },
    { 'name': 'Intersecting Pentagons Copy', 'path': '/assessments/pentagons' },
    { 'name': 'Reading', 'path': '/assessments/reading' },
    { 'name': 'Crowding', 'path': '/assessments/crowding' },
    { 'name': 'CPC Questionnaire', 'path': '/assessments/questionnaire' },
    { 'name': 'Overview', 'path': '/assessments' }
]