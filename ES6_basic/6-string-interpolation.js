export default function getSanFranciscoDescription() {
  const year = 2017;
  const budget = {
    income: '$119,868',
    gdp: '$154.2 billion',
    capita: '$178,479',
  };

  const { income, gdp, capita } = budget;

  return `As of ${year}, it is estimated that ${income} in salary are fed to the city's ${gdp} GDP of ${capita}`;
}
