interface PrintJsonProps {
  data: any;
}

export function PrintJson({data}: PrintJsonProps) {
  return <div>{JSON.stringify(data, null, 2)}</div>;
}
