
import { AlignItemsList } from "@/components/AlignItemsList";
import { ClickCounter } from "@/components/ClickCounter";
import { AnalyticsPanel } from "@/components/AnalyticsPanel";
import AnalyticsProvider from "@/providers/AnalyticsProvider";
import { Box } from "@mui/material";

export default function Analytics() {


    return (
        <AnalyticsProvider>
            <Box sx={{ color: 'white', p: 2, display: 'flex', gap: 2 }}>
                <AlignItemsList />
                <ClickCounter />
            </Box>

            <AnalyticsPanel />
        </AnalyticsProvider>
    )



}

