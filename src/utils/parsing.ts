export function getOperator(expression: string) {
  const operator: string = expression.split(' ')[0];
  return operator;
}

export function getContent(expression: string) {
  const list: string[] = expression.split(' ');
  list.splice(0,1);
  return list.join(' ');
}
