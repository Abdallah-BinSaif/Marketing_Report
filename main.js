const marketingDataJSON = `[
  {
    "campaignId": "C001",
    "campaignName": "Summer Sale 202p",
    "date": "2025-07-01",
    "channel": "Email",
    "impressions": 10000,
    "clicks": 500,
    "conversions": 50,
    "spend": 200
  },
  {
    "campaignId": "C002",
    "campaignName": "Summer Sale 202p",
    "date": "2025-07-01",
    "channel": "Social Media",
    "impressions": 15000,
    "clicks": 750,
    "conversions": 75,
    "spend": 300
  },
  {
    "campaignId": "C003",
    "campaignName": "Summer Sale 202p",
    "date": "2025-07-02",
    "channel": "Email",
    "impressions": 11000,
    "clicks": 550,
    "conversions": 55,
    "spend": 210
  },
  {
    "campaignId": "C004",
    "campaignName": "Summer Sale 202p",
    "date": "2025-07-02",
    "channel": "Display Ads",
    "impressions": 20000,
    "clicks": 400,
    "conversions": 40,
    "spend": 250
  },
  {
    "campaignId": "C005",
    "campaignName": "Summer Sale 202p",
    "date": "2025-07-03",
    "channel": "Social Media",
    "impressions": 16000,
    "clicks": 800,
    "conversions": 80,
    "spend": 320
  },
  {
    "campaignId": "C006",
    "campaignName": "Back to School",
    "date": "2025-08-10",
    "channel": "Email",
    "impressions": 8000,
    "clicks": 400,
    "conversions": 40,
    "spend": 180
  },
  {
    "campaignId": "C007",
    "campaignName": "Back to School",
    "date": "2025-08-10",
    "channel": "Search Engine",
    "impressions": 12000,
    "clicks": 600,
    "conversions": 60,
    "spend": 280
  },
  {
    "campaignId": "C008",
    "campaignName": "Back to School",
    "date": "2025-08-11",
    "channel": "Social Media",
    "impressions": 9000,
    "clicks": 450,
    "conversions": 45,
    "spend": 200
  },
  {
    "campaignId": "C009",
    "campaignName": "Autumn Collection",
    "date": "2025-09-01",
    "channel": "Email",
    "impressions": 13000,
    "clicks": 650,
    "conversions": 65,
    "spend": 250
  },
  {
    "campaignId": "C010",
    "campaignName": "Autumn Collection",
    "date": "2025-09-01",
    "channel": "Display Ads",
    "impressions": 18000,
    "clicks": 360,
    "conversions": 36,
    "spend": 220
  },
  {
    "campaignId": "C011",
    "campaignName": "Autumn Collection",
    "date": "2025-09-02",
    "channel": "Social Media",
    "impressions": 14000,
    "clicks": 700,
    "conversions": 70,
    "spend": 280
  },
  {
    "campaignId": "C012",
    "campaignName": "Holiday Season",
    "date": "2025-11-15",
    "channel": "Email",
    "impressions": 20000,
    "clicks": 1000,
    "conversions": 100,
    "spend": 400
  },
  {
    "campaignId": "C013",
    "campaignName": "Holiday Season",
    "date": "2025-11-15",
    "channel": "Search Engine",
    "impressions": 25000,
    "clicks": 1250,
    "conversions": 125,
    "spend": 500
  },
  {
    "campaignId": "C014",
    "campaignName": "Holiday Season",
    "date": "2025-11-16",
    "channel": "Social Media",
    "impressions": 22000,
    "clicks": 1100,
    "conversions": 110,
    "spend": 450
  },
  {
    "campaignId": "C015",
    "campaignName": "New Year Kickoff",
    "date": "2026-01-05",
    "channel": "Email",
    "impressions": 15000,
    "clicks": 750,
    "conversions": 75,
    "spend": 300
  },
  {
    "campaignId": "C016",
    "campaignName": "New Year Kickoff",
    "date": "2026-01-05",
    "channel": "Display Ads",
    "impressions": 19000,
    "clicks": 380,
    "conversions": 38,
    "spend": 240
  },
  {
    "campaignId": "C017",
    "campaignName": "New Year Kickoff",
    "date": "2026-01-06",
    "channel": "Social Media",
    "impressions": 16000,
    "clicks": 800,
    "conversions": 80,
    "spend": 320
  },
  {
    "campaignId": "C018",
    "campaignName": "Spring Forward",
    "date": "2026-03-01",
    "channel": "Email",
    "impressions": 11000,
    "clicks": 550,
    "conversions": 55,
    "spend": 220
  },
  {
    "campaignId": "C019",
    "campaignName": "Spring Forward",
    "date": "2026-03-01",
    "channel": "Search Engine",
    "impressions": 14000,
    "clicks": 700,
    "conversions": 70,
    "spend": 300
  },
  {
    "campaignId": "C020",
    "campaignName": "Spring Forward",
    "date": "2026-03-02",
    "channel": "Social Media",
    "impressions": 12000,
    "clicks": 600,
    "conversions": 60,
    "spend": 250
  },
  {
    "campaignId": "C021",
    "campaignName": "Early Bird Summer",
    "date": "2025-06-20",
    "channel": "Email",
    "impressions": 9000,
    "clicks": 450,
    "conversions": 45,
    "spend": 190
  },
  {
    "campaignId": "C022",
    "campaignName": "Early Bird Summer",
    "date": "2025-06-20",
    "channel": "Social Media",
    "impressions": 10000,
    "clicks": 500,
    "conversions": 50,
    "spend": 210
  },
  {
    "campaignId": "C023",
    "campaignName": "Early Bird Summer",
    "date": "2025-06-21",
    "channel": "Display Ads",
    "impressions": 13000,
    "clicks": 260,
    "conversions": 26,
    "spend": 180
  },
  {
    "campaignId": "C024",
    "campaignName": "Flash Sale Weekend",
    "date": "2025-07-15",
    "channel": "Email",
    "impressions": 18000,
    "clicks": 900,
    "conversions": 90,
    "spend": 350
  }
]`
const startTime = performance.now()
const marketingData = JSON.parse(marketingDataJSON)

const marketingReport = {
    overallSummary: {
        totalImpressions: 0,
        totalClick: 0,
        totalConversions: 0,
        totalSpend: 0,
        ctr: "N/A",
        cvr: "N/A",
        cpa: "N/A",
    },
    channelPerformance: {},
    campaignPerformance: {},
}

function channelPerform(singleCamp) {
    if(!marketingReport.channelPerformance[singleCamp.channel]){
        marketingReport.channelPerformance[singleCamp.channel] = {
            impressions: 0,
            clicks: 0,
            conversions: 0,
            spend: 0,
            ctr: "N/A",
            cvr: "N/A",
            cpa: "N/A",
        }
    }
    marketingReport.channelPerformance[singleCamp.channel].impressions += singleCamp.impressions;
    marketingReport.channelPerformance[singleCamp.channel].clicks += singleCamp.clicks;
    marketingReport.channelPerformance[singleCamp.channel].conversions += singleCamp.conversions;
    marketingReport.channelPerformance[singleCamp.channel].spend += singleCamp.spend;
    const impressions = marketingReport.channelPerformance[singleCamp.channel].impressions
    const clicks = marketingReport.channelPerformance[singleCamp.channel].clicks
    const conversions = marketingReport.channelPerformance[singleCamp.channel].conversions
    const spend = marketingReport.channelPerformance[singleCamp.channel].spend
    marketingReport.channelPerformance[singleCamp.channel].ctr = parseFloat(CTR(clicks, impressions).toFixed(2))
    marketingReport.channelPerformance[singleCamp.channel].cvr = parseFloat(CVR(conversions, clicks).toFixed(2))
    marketingReport.channelPerformance[singleCamp.channel].cpa = parseFloat(CPA(spend, conversions).toFixed(2))
}
function campaignPerform(singleCamp) {
    const camp = singleCamp.campaignName
    const campPerf = marketingReport.campaignPerformance
    if(!campPerf[camp]){
        campPerf[camp] = {
            impressions: 0,
            clicks: 0,
            conversions: 0,
            spend: 0,
            ctr: "N/A",
            cvr: "N/A",
            cpa: "N/A",
        }
    }
    campPerf[camp].impressions += singleCamp.impressions;
    campPerf[camp].clicks += singleCamp.clicks;
    campPerf[camp].conversions += singleCamp.conversions;
    campPerf[camp].spend += singleCamp.spend;
    const impressions = campPerf[camp].impressions
    const clicks = campPerf[camp].clicks
    const conversions = campPerf[camp].conversions
    const spend = campPerf[camp].spend
    campPerf[camp].ctr = parseFloat(CTR(clicks, impressions).toFixed(2))
    campPerf[camp].cvr = parseFloat(CVR(conversions, clicks).toFixed(2))
    campPerf[camp].cpa = parseFloat(CPA(spend, conversions).toFixed(2))
}

for(const singleCamp of marketingData){
    channelPerform(singleCamp)
    campaignPerform(singleCamp)
    const overallSumm = marketingReport.overallSummary
    overallSumm.totalImpressions += singleCamp.impressions
    overallSumm.totalClick += singleCamp.clicks
    overallSumm.totalConversions += singleCamp.conversions
    overallSumm.totalSpend += singleCamp.spend
    overallSumm.ctr = parseFloat(CTR(overallSumm.totalClick, overallSumm.totalImpressions).toFixed(2))
    overallSumm.cvr = parseFloat(CVR(overallSumm.totalConversions, overallSumm.totalClick).toFixed(2))
    overallSumm.cpa = parseFloat(CPA(overallSumm.totalSpend, overallSumm.totalConversions).toFixed(2))
}

function CTR(clicks, impressions) {
    if(impressions === 0) return 0
    return (clicks / impressions) * 100
}
function CVR(conversions, clicks) {
    if(clicks === 0) return 0
    return (conversions / clicks) * 100
}
function CPA(spend, conversions) {
    if(conversions === 0) return 0
    return (spend / conversions)
}
console.log(marketingReport)


const endTime = performance.now()
const executeTime = endTime - startTime
console.log(`The programm take time minimum ${executeTime.toFixed(4)} millisecond`)