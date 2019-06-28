import {Icon} from './types';

const icons = {
  [Icon.ARROW_LEFT]: [
    'M25.88 3.76l-3.76-3.76-16 16 16 16 3.76-3.76-12.213-12.24z',
  ],

  [Icon.CLOUD]: [
    'M21.334 16.48q0-0.241-0.16-0.321l-5.854-5.934q-0.16-0.080-0.401-0.080t-0.401 0.080l-5.854 5.854q-0.16 0.241-0.16 0.401 0 0.241 0.16 0.401t0.401 0.16h3.689v5.854q0 0.241 0.16 0.401t0.401 0.16h3.208q0.241 0 0.401-0.16t0.16-0.401v-5.854h3.689q0.241 0 0.401-0.16t0.16-0.401zM32 21.291q0 2.646-1.925 4.571t-4.491 1.844h-18.124q-3.047 0-5.293-2.165t-2.165-5.293q0-2.165 1.203-4.010t3.128-2.727q-0.080-0.481-0.080-0.722 0-3.529 2.486-6.015t6.015-2.486q2.646 0 4.812 1.443t3.128 3.849q1.203-1.043 2.727-1.043 1.764 0 3.047 1.203t1.203 3.047q0 1.283-0.642 2.245 2.165 0.561 3.529 2.326t1.443 3.93z',
  ],

  // M15.927 23.555l1.81 2.586c-0.521 0.052-1.125 0.082-1.737 0.082h-0c-6.656 0-12.498-3.553-15.631-8.868-0.232-0.387-0.369-0.855-0.369-1.354s0.137-0.966 0.376-1.366l-0.007 0.012c1.335-2.265 3.162-4.21 5.335-5.697l3.171 4.53c-0.278 0.788-0.43 1.636-0.43 2.52 0 4.152 3.341 7.516 7.483 7.555zM31.631 17.354c-1.759 2.985-4.375 5.414-7.51 6.971l0.001 0.001 2.304 3.289c0.422 0.603 0.276 1.434-0.328 1.857l-0.728 0.51c-0.603 0.422-1.434 0.276-1.857-0.328l-17.938-25.268c-0.422-0.603-0.276-1.434 0.328-1.857l0.728-0.51c0.603-0.422 1.434-0.276 1.857 0.328l2.835 4.034c1.493-0.393 3.061-0.603 4.677-0.603 6.656 0 12.498 3.553 15.631 8.868 0.232 0.387 0.369 0.855 0.369 1.354s-0.137 0.966-0.376 1.366l0.007-0.012zM23.556 16c0-4.176-3.38-7.556-7.556-7.556-0.997 0-1.948 0.193-2.818 0.543l1.072 1.503c1.437-0.454 3.058-0.342 4.467 0.412h-0.002c-1.314 0-2.379 1.065-2.379 2.379 0 1.313 1.064 2.379 2.379 2.379 1.314 0 2.379-1.065 2.379-2.379v-0.002c1.026 1.916 0.906 4.329-0.458 6.164v0.001l1.073 1.503c1.148-1.325 1.843-3.054 1.843-4.947zM14.556 21.596l-4.307-6.153c-0.279 2.91 1.629 5.464 4.307 6.153z

  [Icon.ADD]: [
    'M26.667 15.333h-10v-10h-1.333v10h-10v1.333h10v10h1.333v-10h10z',
  ],

  [Icon.BOOK]: [
    'M18.4 3.2c-0.96 0-1.82 0.42-2.4 1.1-0.58-0.66-1.44-1.1-2.4-1.1h-13.6v24h13.6c0.88 0 1.6 0.72 1.6 1.6h1.6c0-0.88 0.72-1.6 1.6-1.6h13.6v-24h-13.6zM15.2 26.020c-0.48-0.28-1.020-0.42-1.6-0.42h-12v-20.8h12c0.88 0 1.6 0.72 1.6 1.6v19.62zM30.4 25.6h-12c-0.58 0-1.12 0.16-1.6 0.42v-19.62c0-0.88 0.72-1.6 1.6-1.6h12v20.8z',
  ],

  [Icon.CALENDAR]: [
    'M30.4 6v22.4h-28.8v-22.4h28.8zM32 4.4h-32v25.6h32v-25.6z',
    'M30.4 6v4.568h-28.8v-4.568h28.8zM32 4.4h-32v7.768h32v-7.768z',
    'M9.8 22.096c0.798-0.472 1.489-0.974 2.128-1.534l-0.016 0.014c0.757-0.56 1.27-1.411 1.375-2.385l0.001-0.015c0.006-0.039 0.009-0.083 0.009-0.129 0-0.495-0.401-0.896-0.896-0.896-0.015 0-0.029 0-0.043 0.001l0.002-0c-0.56 0-0.888 0.328-1.104 1.112l-1.448-0.352c0.21-1.166 1.216-2.039 2.427-2.039 0.066 0 0.132 0.003 0.197 0.008l-0.009-0.001c1.56 0 2.52 0.888 2.52 2.312-0.031 1.058-0.52 1.997-1.274 2.627l-0.006 0.005c-0.516 0.476-1.093 0.899-1.714 1.255l-0.046 0.025h3.128v1.256h-5.232v-1.264z',
    'M19.2 21.912h-3.536v-1.288l3.328-4.72h1.736v4.8h0.92v1.232h-0.92v1.424h-1.528v-1.448zM17.088 20.68h2.184v-3.2z',
    'M8 2h1.6v5.6h-1.6v-5.6z',
    'M22.4 2h1.6v5.6h-1.6v-5.6z',
  ],

  [Icon.CHECKBOX_CHECK]: [
    'M12.173 30.254l-12.173-9.502 3.185-4.058 8.116 6.369 16.642-21.316 4.058 3.185-19.827 25.323z',
  ],

  [Icon.CLOSE]: [
    'M32 1.351l-1.351-1.351-14.645 14.645-14.654-14.645-1.351 1.351 14.645 14.654-14.645 14.645 1.351 1.351 14.654-14.645 14.645 14.645 1.351-1.351-14.645-14.645 14.645-14.654z',
  ],

  [Icon.CLOUD_UPLOAD]: [
    'M26.633 11.533c0.017-0.233 0.033-0.467 0.033-0.7 0-3.867-3.133-7-7-7-2.283 0-4.383 1.083-5.7 2.917-0.533-0.167-1.083-0.25-1.633-0.25-2.6 0-4.817 1.9-5.25 4.417-2.517 0.433-4.417 2.65-4.417 5.25 0 2.933 2.4 5.333 5.333 5.333h6v-1.333h-6c-2.2 0-4-1.8-4-4 0-2.1 1.633-3.85 3.717-3.983l0.583-0.033 0.033-0.583c0.15-2.1 1.9-3.733 4-3.733 0.567 0 1.117 0.117 1.633 0.35l0.533 0.233 0.3-0.5c1.050-1.717 2.867-2.75 4.867-2.75 3.117 0 5.667 2.55 5.667 5.667 0 0.317-0.033 0.633-0.083 0.967l-0.083 0.517 0.467 0.217c1.433 0.633 2.367 2.067 2.367 3.633 0 2.2-1.8 4-4 4h-6v1.333h6c2.933 0 5.333-2.4 5.333-5.333 0-1.933-1.050-3.7-2.7-4.633z',
    'M19.533 18.633l0.933-0.933-4.467-4.483-4.467 4.483 0.933 0.933 2.867-2.85v12.383h1.333v-12.383z',
  ],

  [Icon.MENU]: [
    'M0 26.667h32v-3.556h-32v3.556zM0 17.778h32v-3.556h-32v3.556zM0 5.333v3.556h32v-3.556h-32z',
  ],

  [Icon.REMOVE]: [
    'M25.333 9.333h-18.667v-2.667h18.667v2.667zM23.333 26.667c0 0.733-0.6 1.333-1.333 1.333h-12c-0.733 0-1.333-0.6-1.333-1.333v-16h2.667v9.333h1.333v-9.333h2.667v9.333h1.333v-9.333h2.667v9.333h1.333v-9.333h2.667v16zM13.333 4h5.333c0.733 0 1.333 0.6 1.333 1.333h-8c0-0.733 0.6-1.333 1.333-1.333zM26.667 5.333h-5.333c0-1.467-1.2-2.667-2.667-2.667h-5.333c-1.467 0-2.667 1.2-2.667 2.667h-5.333v5.333h2v16c0 1.467 1.2 2.667 2.667 2.667h12c1.467 0 2.667-1.2 2.667-2.667v-16h2v-5.333z',
  ],

  [Icon.XLS]: [
    'M6.883 16.95l-1.233-1.917h1.050l0.733 1.267 0.733-1.267h0.95l-1.2 1.883 1.333 2.067h-1.050l-0.85-1.417-0.85 1.417h-0.95l1.333-2.033z',
    'M9.767 15.033h0.883v3.233h1.733v0.717h-2.617v-3.95z',
    'M13.483 17.767c0.167 0.4 0.433 0.567 0.867 0.567s0.7-0.183 0.7-0.483c0-0.267-0.15-0.367-0.717-0.5-0.617-0.15-0.817-0.217-1-0.333-0.3-0.2-0.45-0.467-0.45-0.85 0-0.75 0.533-1.217 1.4-1.217 0.717 0 1.233 0.267 1.517 0.817l-0.717 0.333c-0.2-0.333-0.417-0.45-0.8-0.45-0.367 0-0.567 0.15-0.567 0.433 0 0.25 0.167 0.367 0.683 0.467 0.533 0.117 0.817 0.2 1.033 0.333 0.317 0.2 0.45 0.483 0.45 0.9 0 0.8-0.55 1.233-1.55 1.233-0.833 0-1.333-0.3-1.65-0.95l0.8-0.3z',
    'M23.633 2.667h-13.633v9.333h-7.333v10h7.333v7.333h18.667v-20.917l-5.033-5.75zM24 5.1l2.533 2.9h-2.533v-2.9zM4 13.333h13.333v7.333h-13.333v-7.333zM11.333 28v-6h7.333v-10h-7.333v-8h11.333v5.333h4.667v18.667h-16z',
  ],

  [Icon.WARNING]: [
    'M16 3.975l-13.3 24.050h26.6l-13.3-24.050zM15.15 12.025h1.7v4.15l-0.45 5.117h-0.817l-0.45-5.117 0.017-4.15zM16 25.358c-0.667 0-1.183-0.517-1.183-1.183s0.517-1.183 1.183-1.183c0.65 0 1.183 0.533 1.183 1.183s-0.533 1.183-1.183 1.183z',
  ],

  [Icon.WRENCH]: [
    'M5.667 29.35c-0.8 0-1.567-0.317-2.133-0.883s-0.883-1.333-0.883-2.133 0.317-1.567 0.883-2.133l8-8 0.95 0.95-8 8c-0.317 0.317-0.5 0.75-0.5 1.2s0.183 0.883 0.5 1.2 0.75 0.5 1.2 0.5 0.883-0.183 1.2-0.5l8-8 0.95 0.95-8 8c-0.6 0.55-1.367 0.85-2.167 0.85z',
    'M19.8 15.133l-0.933-0.933 4.85-4.867h1.883l2-3.633-1.3-1.3-3.633 2v1.883l-4.867 4.85-0.933-0.933 4.467-4.483v-2.117l5.2-2.833 2.7 2.7-2.833 5.2h-2.117z',
    'M24.083 29.333c-2.9 0-5.25-2.35-5.25-5.25 0-0.667 0.117-1.317 0.367-1.933l-9.35-9.35c-0.617 0.25-1.267 0.367-1.933 0.367-2.9 0-5.25-2.35-5.25-5.25 0-0.633 0.117-1.267 0.333-1.85l0.367-0.967 3.1 3.1c0.483 0.483 1.25 0.483 1.717 0s0.483-1.25 0-1.717l-3.083-3.117 0.967-0.367c0.6-0.217 1.217-0.333 1.85-0.333 2.9 0 5.25 2.35 5.25 5.25 0 0.667-0.117 1.317-0.367 1.933l9.35 9.35c0.617-0.25 1.267-0.367 1.933-0.367 2.9 0 5.25 2.35 5.25 5.25 0 0.633-0.117 1.267-0.333 1.85l-0.367 0.967-3.1-3.1c-0.483-0.483-1.25-0.483-1.717 0s-0.483 1.25 0 1.717l3.1 3.1-0.967 0.367c-0.6 0.233-1.233 0.35-1.867 0.35zM10.133 11.183l10.683 10.683-0.217 0.433c-0.283 0.55-0.433 1.15-0.433 1.783 0 2.167 1.75 3.917 3.917 3.917 0.1 0 0.2 0 0.3-0.017l-1.517-1.517c-1-1-1-2.617 0-3.617s2.617-1 3.617 0l1.517 1.517c0-0.1 0.017-0.2 0.017-0.3 0-2.167-1.75-3.917-3.917-3.917-0.633 0-1.217 0.15-1.783 0.433l-0.433 0.217-10.7-10.667 0.217-0.433c0.283-0.55 0.433-1.15 0.433-1.783 0-2.167-1.75-3.917-3.917-3.917-0.1 0-0.2 0-0.3 0.017l1.517 1.517c1 1 1 2.617 0 3.617s-2.617 1-3.617 0l-1.517-1.517c0 0.1-0.017 0.2-0.017 0.3 0.017 2.15 1.767 3.9 3.933 3.9 0.633 0 1.217-0.15 1.783-0.433l0.433-0.217z',
  ],
};

export default icons;
