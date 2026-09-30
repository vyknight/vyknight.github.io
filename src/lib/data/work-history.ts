import type { ProjectSummary } from '$lib/types/content';

export interface WorkHistoryEntry extends ProjectSummary {
	id: string;
	type: string;
	href: string;
}

export const amazonSoftwareEngineer: WorkHistoryEntry = {
	id: '06',
	title: 'Amazon',
	type: 'Software Engineer I',
	description: 'On the Chargebacks team under SCOT - OSS.',
	href: '/work/amazon-software-engineer'
};

export const amazonIntern: WorkHistoryEntry = {
	id: '05',
	title: 'Amazon',
	type: 'Intern',
	description: 'On the Chargebacks team, except it was called SPOT back then.',
	href: '/work/amazon-intern'
};

export const huaweiIntern: WorkHistoryEntry = {
	id: '04',
	title: 'Huawei',
	type: 'Intern',
	description: 'On the GaussDB team.',
	href: '/work/huawei'
};

export const ibmIntern: WorkHistoryEntry = {
	id: '03',
	title: 'IBM',
	type: 'Intern',
	description: 'On the SkillsNetwork team.',
	href: '/work/ibm'
};

export const unicefProjectIntern: WorkHistoryEntry = {
	id: '02',
	title: 'UNICEF',
	type: 'Project Intern',
	description: 'For a semester long project.',
	href: '/work/unicef'
};

export const onovaSoftwareEngineer: WorkHistoryEntry = {
	id: '01',
	title: 'Onova',
	type: 'Intern / Part-time Software Engineer',
	description: 'The second software engineer of the company.',
	href: '/work/onova'
};

export const WORK_HISTORY: readonly WorkHistoryEntry[] = [
	amazonSoftwareEngineer,
	amazonIntern,
	huaweiIntern,
	ibmIntern,
	unicefProjectIntern,
	onovaSoftwareEngineer
];
