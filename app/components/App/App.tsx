import { setRequestHeader } from "../../utils";
import GlobalRouter from "../../routes/Router";
import PageContainer from "../PageContainer";
import "./App.css";
import { validateToken } from "../../validations";
import ToastProvider from "@root/routes/ToastProvider";
import { AwsRum, AwsRumConfig } from "aws-rum-web";

try {
  const config: AwsRumConfig = {
    sessionSampleRate: 1,
    endpoint: "https://dataplane.rum.us-west-2.amazonaws.com",
    telemetries: ["performance", "http", "errors"],
    allowCookies: true,
    enableXRay: true,
  };

  const APPLICATION_ID: string = "7ee76bc6-276f-4497-834b-1df09ff6313b";
  const APPLICATION_VERSION: string = "1.0.0";
  const APPLICATION_REGION: string = "us-west-2";

  const awsRum: AwsRum = new AwsRum(
    APPLICATION_ID,
    APPLICATION_VERSION,
    APPLICATION_REGION,
    config
  );
} catch (error) {
  // Ignore errors thrown during CloudWatch RUM web client initialization
}

function App() {
  const appToken = localStorage.getItem("appToken");
  const isAppTokenValid = validateToken();
  if (isAppTokenValid) setRequestHeader(appToken!);

  return (
    <div className="h-screen">
      <ToastProvider>
        <PageContainer>
          <GlobalRouter />
        </PageContainer>
      </ToastProvider>
    </div>
  );
}

export default App;
