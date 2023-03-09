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
        "prh": {
            "rulePaths": [__dirname + "/../dict/prh-dic.yml"]
        }
    }
};