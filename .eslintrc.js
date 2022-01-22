module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint"],
    extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
    ignorePatterns: ["/.nyc_output", "/coverage", "/dist"],
    rules: {
        // Use self.
        dprint: [
            "error",
            {
                config: {
                    lineWidth: 80,
                    semiColons: "asi",
                    quoteStyle: "preferDouble",
                    singleBodyPosition: "sameLine",
                    nextControlFlowPosition: "sameLine",
                    "arrowFunction.useParentheses": "preferNone",
                    "taggedTemplate.spaceBeforeLiteral": false,

                    // operatorPosition
                    operatorPosition: "sameLine",
                    "conditionalExpression.operatorPosition": "nextLine",

                    // preferHanging
                    "forInStatement.preferHanging": true,
                    "forOfStatement.preferHanging": true,

                    // preferSingleLine
                    "arguments.preferSingleLine": true,
                    "binaryExpression.preferSingleLine": true,
                    "exportDeclaration.preferSingleLine": true,
                    "importDeclaration.preferSingleLine": true,
                    "parameters.preferSingleLine": true,

                    // linePerExpression
                    "binaryExpression.linePerExpression": true,
                    "memberExpression.linePerExpression": true,
                },
            },
        ],
    },
}
