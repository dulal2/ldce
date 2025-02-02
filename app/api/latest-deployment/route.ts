import { NextResponse } from "next/server"

export async function GET() {
  const vercelToken = process.env.VERCEL_TOKEN
  const projectId = process.env.VERCEL_PROJECT_ID

  if (!vercelToken || !projectId) {
    return NextResponse.json({ error: "Missing Vercel configuration" }, { status: 500 })
  }

  try {
    const response = await fetch(`https://api.vercel.com/v6/deployments?projectId=${projectId}&limit=1`, {
      headers: {
        Authorization: `Bearer ${vercelToken}`,
      },
    })

    if (!response.ok) {
      throw new Error("Failed to fetch deployment info from Vercel API")
    }

    const data = await response.json()
    const latestDeployment = data.deployments[0]

    if (!latestDeployment) {
      return NextResponse.json({ error: "No deployments found" }, { status: 404 })
    }

    const fileChanges = latestDeployment.files.map((file: any) => ({
      filename: file.name,
      status: file.type,
    }))

    return NextResponse.json({
      id: latestDeployment.uid,
      url: latestDeployment.url,
      createdAt: latestDeployment.created,
      fileChanges,
    })
  } catch (error) {
    console.error("Error fetching deployment info:", error)
    return NextResponse.json({ error: "Failed to fetch deployment info" }, { status: 500 })
  }
}

