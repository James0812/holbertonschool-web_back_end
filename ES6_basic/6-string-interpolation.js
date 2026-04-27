export default function getSanFranciscoDescription() {
  const year = 2017;
  const budget = {
    income: '$119,868',
    gdp: '$154.2 billion',
    capita: '$178,479',
  };
  return `As of ${year}, it is estimated that ${budget.income} in salary are fed to the city's ${budget.gdp} GDP of ${budget.capita}`;
}
