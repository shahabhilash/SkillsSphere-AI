import { normalizeSkillArray } from "../utils/skillNormalizer.js";
import { weights } from "../config/weights.config.js";

export const skillEvaluator = ({ resumeSkills = [], jobSkills = [] }) => {
  const currentWeight = weights.skill ?? 0.50;
  // Use the optimized normalizer
  const normResume = normalizeSkillArray(resumeSkills);
  const normJob = normalizeSkillArray(jobSkills);

  if (jobSkills.length === 0 || normJob.length === 0) {
    return {
      key: "skill_match",
      label: "Skill Match",
      score: 0,
      weight: currentWeight,
      weightedScore: 0,
      summary: "No job skills provided for comparison",
      details: {
        feedback: ["No job skills provided for comparison"],
        matchedSkills: [],
        missingSkills: [],
        extraSkills: normResume,
      },
      meta: {
        jobSkillCount: 0,
        resumeSkillCount: normResume.length
      }
    };
  }

  // Matched: intersection
  const matched = normJob.filter(s => normResume.includes(s));

  // Missing from job
  const missing = normJob.filter(s => !normResume.includes(s));

  // Extra in resume
  const extra = normResume.filter(s => !normJob.includes(s));

  // Score: (matched / job.length) * 100, adjusted
  const score = jobSkills.length > 0 ? Math.round((matched.length / normJob.length) * 100) : 0;

  // Feedback
  const feedback = [];
  if (matched.length > 0) feedback.push(`Great! ${matched.length}/${normJob.length} job skills match.`);
  if (missing.length > 0) feedback.push(`Add these job skills: ${missing.slice(0,3).join(', ')}${missing.length > 3 ? '...' : ''}`);
  if (extra.length > 0) feedback.push(`Consider prioritizing job-relevant skills over extras.`);

  return {
    key: "skill_match",
    label: "Skill Match",
    score,
    weight: currentWeight,
    weightedScore: Math.round(score * currentWeight),
    summary: matched.length > 0 
      ? `Matched ${matched.length} out of ${normJob.length} required skills.`
      : "No matching skills found for this position.",
    details: {
      matchedSkills: matched,
      missingSkills: missing,
      extraSkills: extra,
      feedback
    },
    meta: {
      jobSkillCount: normJob.length,
      resumeSkillCount: normResume.length
    }
  };
};

