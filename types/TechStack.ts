export type HardSkill = {
  title: string;
  icon: string;
};

export type HardSkillGroup = {
  title?: string;
  skills: HardSkill[];
};

export type TechStack = {
  title: string;
  groups: HardSkillGroup[];
};
