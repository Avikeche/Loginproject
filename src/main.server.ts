import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config.server';
import { provideHttpClient, withFetch } from '@angular/common/http';

// Modify the appConfig to include the `provideHttpClient` with `withFetch`
const bootstrap = () => bootstrapApplication(AppComponent, {
  ...appConfig, // Preserve existing appConfig properties
  providers: [
    ...appConfig.providers,  // Ensure existing providers are included
    provideHttpClient(withFetch())  // Add fetch support for HttpClient
  ]
});

export default bootstrap;
