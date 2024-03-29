import { Navigate } from "react-router-dom";
import PageTree from "./01_page-tree/page-tree.component";
import FormikNested from "./02_formik-nested/formik-nested.component";
import UseEffectOnce from "./03_use_effect_once/use-effect-once.component";
import UseTimeoutHook from "./04_use_timeout/use-timeout.component";
import UseIntervalHook from "./05_use_interval/use-interval.component";
import Challenges from "./challanges.component";

// eslint-disable-next-line react-refresh/only-export-components
export const ChallengesPaths = [
  {
    path: "page-tree",
    element: <PageTree />,
  },
  {
    path: "formik-nested",
    element: <FormikNested />,
  },
  {
    path: "use-once",
    element: <UseEffectOnce />,
  },
  {
    path: "use-timeout",
    element: <UseTimeoutHook />,
  },
  {
    path: "use-interval",
    element: <UseIntervalHook />,
  },
];

const ChallengesRoutes = {
  path: "challenge",
  element: <Challenges />,
  children: [
    {
      index: true,
      element: <Navigate to="/" replace />,
    },
    ...ChallengesPaths,
    {
      path: "*",
      element: <Navigate to="/" replace />,
    },
  ],
};

export default ChallengesRoutes;
