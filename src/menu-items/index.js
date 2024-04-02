import HomeIcon from "@mui/icons-material/Home";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import AssessmentIcon from "@mui/icons-material/Assessment";
import CampaignIcon from "@mui/icons-material/Campaign";
import ReviewsIcon from "@mui/icons-material/Reviews";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import { pageId } from "../constants";

export const menuItems = [
  {
    id: pageId.HOME_TYPE_1,
    title: "Home",
    url: "/app/search",
    icon: HomeIcon,
    disableAttrFilter: true,
    disableExportButton: false,
  },
  {
    id: pageId.BRAND_ANALYSIS_TYPE_1,
    title: "Brand Analysis",
    url: "/app/brand-analysis",
    icon: AnalyticsIcon,
    disableAttrFilter: false,
    disableExportButton: true,
  },
  {
    id: pageId.CATEGORY_ANALYSIS_TYPE_1,
    title: "Category Analysis",
    url: "/app/category-analysis",
    icon: AssessmentIcon,
    disableAttrFilter: false,
    disableExportButton: true,
  },
  {
    id: "needs",
    title: "Needs",
    url: "/app/needs",
    icon: PersonSearchIcon,
    disableAttrFilter: true,
    disableExportButton: false,
  },
  {
    id: pageId.AWARENESS_TYPE_1,
    title: "Awareness",
    url: "/app/awareness",
    icon: CampaignIcon,
    disableAttrFilter: false,
    disableExportButton: false,
  },
  {
    id: pageId.FEEDBACK_TYPE_1,
    title: "Feedback",
    url: "/app/feedback",
    icon: ReviewsIcon,
    disableAttrFilter: false,
    disableExportButton: false,
  },
];
