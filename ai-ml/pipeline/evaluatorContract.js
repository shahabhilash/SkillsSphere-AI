let validateEvaluatorResult;

try {
  const zmod = await import('zod');
  const z = zmod.z;
  const flexibleRecordSchema = z.record(z.string(), z.unknown()).default({});
  const evaluatorResultSchema = z
    .object({
      key: z.string().trim().min(1),
      label: z.string().trim().min(1),
      score: z.number().min(0).max(100),
      weight: z.number().min(0).max(1).optional(),
      weightedScore: z.number().min(0).max(100).optional(),
      summary: z.string().default(""),
      details: flexibleRecordSchema,
      meta: flexibleRecordSchema,
    })
    .strict();

  validateEvaluatorResult = (result) => evaluatorResultSchema.parse(result);
} catch (e) {
  validateEvaluatorResult = (result) => {
    const issues = [];
    const allowedKeys = new Set(['key','label','score','weight','weightedScore','summary','details','meta']);
    if (!result || typeof result !== 'object') {
      issues.push({ path: [], message: 'Result must be an object' });
    } else {
      if (!result.key || typeof result.key !== 'string' || result.key.trim().length === 0) {
        issues.push({ path: ['key'], message: 'key must be a non-empty string' });
      }
      if (!result.label || typeof result.label !== 'string' || result.label.trim().length === 0) {
        issues.push({ path: ['label'], message: 'label must be a non-empty string' });
      }
      if (typeof result.score !== 'number' || result.score < 0 || result.score > 100) {
        issues.push({ path: ['score'], message: 'score must be a number between 0 and 100' });
      }
      if (result.weight !== undefined && (typeof result.weight !== 'number' || result.weight < 0 || result.weight > 1)) {
        issues.push({ path: ['weight'], message: 'weight must be a number between 0 and 1' });
      }
      Object.keys(result).forEach((k) => {
        if (!allowedKeys.has(k)) {
          issues.push({ code: 'unrecognized_keys', path: [k], message: `unrecognized key ${k}` });
        }
      });
    }
    if (issues.length) {
      const error = new Error('Validation failed');
      error.issues = issues;
      throw error;
    }
    const validated = {
      key: result.key,
      label: result.label,
      score: result.score,
      weight: result.weight,
      weightedScore: result.weightedScore,
      summary: result.summary ?? "",
      details: result.details ?? {},
      meta: result.meta ?? {},
    };
    return validated;
  };
}

export { validateEvaluatorResult };

