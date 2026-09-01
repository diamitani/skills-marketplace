import { promises as fs } from 'fs';
import path from 'path';
import SkillDetailClient from './SkillDetailClient';

// Generate static paths for all skills
export async function generateStaticParams() {
  const filePath = path.join(process.cwd(), 'public', 'data', 'skills.json');
  const fileContents = await fs.readFile(filePath, 'utf8');
  const skills = JSON.parse(fileContents);
  
  return skills.map((skill: any) => ({
    id: skill.id.toString(),
  }));
}

export default function SkillDetail() {
  return <SkillDetailClient />;
}
