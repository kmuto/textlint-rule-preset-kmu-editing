import { moduleInterop } from '@textlint/module-interop'

const jaTechnicalWritingRules = moduleInterop(require("textlint-rule-preset-ja-technical-writing")).rules;
const jaEngineeringPaperRules = moduleInterop(require("textlint-rule-preset-ja-engineering-paper")).rules;
const jaSpacingRules = moduleInterop(require("textlint-rule-preset-ja-spacing")).rules;

module.exports = {
    rules: {
        "rule-no-synonyms": moduleInterop(require("@textlint-ja/textlint-rule-no-synonyms")),
        "filter-rule-comments": moduleInterop(require("textlint-filter-rule-comments")),
        "no-kangxi-radicals": moduleInterop(require("textlint-rule-no-kangxi-radicals")),
        ...jaTechnicalWritingRules,
        ...jaEngineeringPaperRules,
        ...jaSpacingRules
    },
    rulesConfig: {
/*        "preset-ja-technical-writing": true,
        "rule-no-synonyms": true,
        "preset-ja-engineering-paper": true,
        "filter-rule-comments": true, */
//        "no-kangxi-radicals": true,
        // "preset-ja-spacing": true
    }
};

/*
import type { TextlintRuleModule } from "@textlint/types";
export interface Options {
    // If node's text includes allowed text, does not report.
    allows?: string[];
}

const report: TextlintRuleModule<Options> = (context, options = {}) => {
    const { Syntax, RuleError, report, getSource, locator } = context;
    const allows = options.allows ?? [];
    return {
        [Syntax.Str](node) { // "Str" node
            const text = getSource(node); // Get text
            if (allows.some(allow => text.includes(allow))) {
                return;
            }
            const matches = text.matchAll(/bugs/g);
            for (const match of matches) {
                const index = match.index ?? 0;
                const matchRange = [index, index + match[0].length] as const;
                const ruleError = new RuleError("Found bugs.", {
                    padding: locator.range(matchRange)
                });
                report(node, ruleError);
            }
        }
    }
};

export default report;
*/
