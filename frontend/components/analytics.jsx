/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/0GhKammCeBp
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
"use client"

import { useState, useMemo } from "react"
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"
import { ResponsiveBar } from "@nivo/bar"
import { ResponsivePie } from "@nivo/pie"

export function AnalyticsPage() {
  const [requests, setRequests] = useState([
    {
      id: "REQ001",
      status: "Pending",
      type: "Plastic",
      date: "2023-05-01",
    },
    {
      id: "REQ002",
      status: "Declined",
      type: "Paper",
      date: "2023-06-15",
    },
    {
      id: "REQ003",
      status: "Pending",
      type: "Plastic",
      date: "2023-07-01",
    },
    {
      id: "REQ004",
      status: "Pending",
      type: "Metal",
      date: "2023-08-01",
    },
    {
      id: "REQ005",
      status: "Pending",
      type: "Plastic",
      date: "2023-09-01",
    },
    {
      id: "REQ006",
      status: "Declined",
      type: "Paper",
      date: "2023-10-01",
    },
    {
      id: "REQ007",
      status: "Pending",
      type: "Metal",
      date: "2023-11-01",
    },
    {
      id: "REQ008",
      status: "Pending",
      type: "Plastic",
      date: "2023-12-01",
    },
  ])
  const [filteredRequests, setFilteredRequests] = useState(requests)
  const [selectedType, setSelectedType] = useState("all")
  const [selectedPeriod, setSelectedPeriod] = useState("all")
  const handleTypeFilter = (type) => {
    setSelectedType(type)
    if (type === "all") {
      setFilteredRequests(requests)
    } else {
      setFilteredRequests(requests.filter((request) => request.type === type))
    }
  }
  const handlePeriodFilter = (period) => {
    setSelectedPeriod(period)
    if (period === "all") {
      setFilteredRequests(requests)
    } else {
      const start = new Date(period.split("-")[0], 0, 1)
      const end = new Date(period.split("-")[1], 11, 31)
      setFilteredRequests(requests.filter(
        (request) => new Date(request.date) >= start && new Date(request.date) <= end
      ))
    }
  }
  const totalRequests = requests.length
  const plasticRequests = requests.filter((request) => request.type === "Plastic").length
  const paperRequests = requests.filter((request) => request.type === "Paper").length
  const metalRequests = requests.filter((request) => request.type === "Metal").length
  const requestsByPeriod = useMemo(() => {
    const periods = [
      "2023-01-01 - 2023-03-31",
      "2023-04-01 - 2023-06-30",
      "2023-07-01 - 2023-09-30",
      "2023-10-01 - 2023-12-31",
    ]
    return periods.map((period) => {
      const start = new Date(period.split(" - ")[0])
      const end = new Date(period.split(" - ")[1])
      const count = requests.filter(
        (request) => new Date(request.date) >= start && new Date(request.date) <= end
      ).length
      return { period, count }
    });
  }, [requests])
  const pendingRequests = requests.filter((request) => request.status === "Pending").length
  const declinedRequests = requests.filter((request) => request.status === "Declined").length
  const requestsByStatus = useMemo(() => {
    return [
      { status: "Pending", count: pendingRequests },
      { status: "Declined", count: declinedRequests },
    ]
  }, [pendingRequests, declinedRequests])
  const requestsByTypePercentage = useMemo(() => {
    return [
      { type: "Plastic", percentage: (plasticRequests / totalRequests) * 100 },
      { type: "Paper", percentage: (paperRequests / totalRequests) * 100 },
      { type: "Metal", percentage: (metalRequests / totalRequests) * 100 },
    ]
  }, [plasticRequests, paperRequests, metalRequests, totalRequests])
  return (
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader>
                <CardTitle>Total Requests</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold">{totalRequests}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Plastic Requests</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold">{plasticRequests}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Paper Requests</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold">{paperRequests}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Metal Requests</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold">{metalRequests}</div>
              </CardContent>
            </Card>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Analytics</CardTitle>
              <CardDescription>View analytics on requests over various periods.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h3 className="text-lg font-medium mb-2">Requests by Period</h3>
                  <BarChart className="aspect-[16/9]" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Request Types</h3>
                  <PieChart className="aspect-square" />
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h3 className="text-lg font-medium mb-2">Requests by Status</h3>
                  <BarChart className="aspect-[16/9]" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Request Type Percentages</h3>
                  <PieChart className="aspect-square" />
                </div>
              </div>
            </CardContent>
          </Card>
        </main>
  );
}

function BarChart(props) {
  return (
    (<div {...props}>
      <ResponsiveBar
        data={[
          { name: "Jan", count: 111 },
          { name: "Feb", count: 157 },
          { name: "Mar", count: 129 },
          { name: "Apr", count: 150 },
          { name: "May", count: 119 },
          { name: "Jun", count: 72 },
        ]}
        keys={["count"]}
        indexBy="name"
        margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
        padding={0.3}
        colors={["#2563eb"]}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 4,
          tickPadding: 16,
        }}
        gridYValues={4}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        tooltipLabel={({ id }) => `${id}`}
        enableLabel={false}
        role="application"
        ariaLabel="A bar chart showing data" />
    </div>)
  );
}


function PieChart(props) {
  return (
    (<div {...props}>
      <ResponsivePie
        data={[
          { id: "Jan", value: 111 },
          { id: "Feb", value: 157 },
          { id: "Mar", value: 129 },
          { id: "Apr", value: 150 },
          { id: "May", value: 119 },
          { id: "Jun", value: 72 },
        ]}
        sortByValue
        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
        cornerRadius={0}
        padAngle={0}
        borderWidth={1}
        borderColor={"#ffffff"}
        enableArcLinkLabels={false}
        arcLabel={(d) => `${d.id}`}
        arcLabelsTextColor={"#ffffff"}
        arcLabelsRadiusOffset={0.65}
        colors={["#2563eb"]}
        theme={{
          labels: {
            text: {
              fontSize: "18px",
            },
          },
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
        }}
        role="application" />
    </div>)
  );
}
