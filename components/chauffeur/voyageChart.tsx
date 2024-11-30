"use client"

import * as React from "react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import { Pie, PieChart, LabelList } from "recharts" // Import Pie components
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

import "../../app/globals.css"

const chartData = [
  { country: "Tunis", trips: 450 },
  { country: "Sfax", trips: 320 },
  { country: "Sousse", trips: 270 },
  { country: "Nabeul", trips: 310 },
  { country: "Kairouan", trips: 150 },
  { country: "Monastir", trips: 200 },
  { country: "Gabès", trips: 180 },
  { country: "Medenine", trips: 220 },
  { country: "Tozeur", trips: 140 },
  { country: "Bizerte", trips: 270 },
  { country: "Kasserine", trips: 160 },
  { country: "Jendouba", trips: 130 },
  { country: "Beja", trips: 210 },
  { country: "Mahdia", trips: 180 },
  { country: "Tataouine", trips: 120 },
  { country: "Siliana", trips: 120 },
  { country: "Zaghouan", trips: 140 },
  { country: "Kebili", trips: 100 },
  { country: "Gafsa", trips: 190 },
  { country: "Ariana", trips: 270 },
  { country: "Ben Arous", trips: 250 },
  { country: "La Manouba", trips: 160 },
  { country: "Medenine", trips: 180 },
];

const chartConfig = {
  trips: {
    label: "Trips",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

// Function to get the top 4 countries by trips
// Function to get the top 4 countries by trips
const getTopCountries = (data: Array<{ country: string; trips: number }>) => {
    return data
      .sort((a, b) => b.trips - a.trips) // Sort by trips in descending order
      .slice(0, 4) // Get the top 4
      .map((item, index) => ({
        name: item.country,
        value: item.trips,
        fill: getCountryColor(index), // Assign a color based on the index
      }));
  };
  

// Function to return different colors for each country
const getCountryColor = (index: number) => {
  const colors = [
    "var(--color-tunis)",    // Color for Tunis
    "var(--color-sfax)",     // Color for Sfax
    "var(--color-sousse)",   // Color for Sousse
    "var(--color-nabeul)",   // Color for Nabeul
  ];

  return colors[index] || "var(--color-default)"; // Return color based on index or default color
};

export function Voyage() {
  const [activeChart, setActiveChart] =
    React.useState<keyof typeof chartConfig>("trips")

  const total = React.useMemo(
    () => ({
      trips: chartData.reduce((acc, curr) => acc + curr.trips, 0),
    }),
    []
  )

  // Get top 4 countries for the PieChart
  const topCountries = getTopCountries(chartData);

  return (
    <div>
      <Card className="w-full">
        <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
          <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
            <CardTitle>Nombre de voyage - semaine</CardTitle>
            <CardDescription>
              total trips per country
            </CardDescription>
          </div>
          <div className="flex">
            {/* Dynamically create buttons for each chart */}
            {Object.keys(chartConfig).map((key) => (
              <button
                key={key}
                data-active={activeChart === key}
                className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
                onClick={() => setActiveChart(key as keyof typeof chartConfig)}
              >
                <span className="text-xs text-muted-foreground">
                  {chartConfig[key as keyof typeof chartConfig].label}
                </span>
                <span className="text-lg font-bold leading-none sm:text-3xl">
                  {total[key as keyof typeof total].toLocaleString()}
                </span>
              </button>
            ))}
          </div>
        </CardHeader>
        <CardContent className="px-2 sm:p-6 w-full">
          <ChartContainer config={chartConfig} className="h-[250px] w-full">
            <BarChart
              accessibilityLayer
              data={chartData}
              margin={{
                left: 12,
                right: 12,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="country" // Change the XAxis to display the country names
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                minTickGap={32}
              />
              <ChartTooltip
                content={
                  <ChartTooltipContent
                    className="w-[150px]"
                    nameKey="trips"
                  />
                }
              />
              <Bar dataKey={activeChart} fill={`var(--color-${activeChart})`} />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Pie Chart for the top 4 countries */}
      <Card className="flex flex-col">
        <CardHeader className="items-center pb-0">
          <CardTitle>Les 4 pays plus visités - semaine</CardTitle>
          <CardDescription>Most visited countries based on trips</CardDescription>
        </CardHeader>
        <CardContent className="flex-1 pb-0">
          <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square max-h-[250px] [&_.recharts-text]:fill-background"
          >
            <PieChart>
              <ChartTooltip
                content={<ChartTooltipContent nameKey="value" hideLabel />}
              />
              <Pie data={topCountries} dataKey="value" innerRadius="40%" outerRadius="80%">
                <LabelList
                  dataKey="name"
                  className="fill-background"
                  stroke="none"
                  fontSize={12}
                />
              </Pie>
            </PieChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
}
