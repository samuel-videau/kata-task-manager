export function getOperator(expression: string) {
  const operator: string = expression.split(' ')[0];
  return operator;
}
