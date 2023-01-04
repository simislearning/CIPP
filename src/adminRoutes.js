import React from 'react'
const CIPPSettings = React.lazy(() => import('src/views/cipp/CIPPSettings'))
const Setup = React.lazy(() => import('src/views/cipp/Setup'))
const ApplyStandard = React.lazy(() => import('src/views/tenant/standards/ApplyStandard'))
const GDAPStatus = React.lazy(() => import('src/views/tenant/administration/ListGDAPQueue'))
const GDAP = React.lazy(() => import('src/views/tenant/administration/GDAPWizard'))
const appapproval = React.lazy(() => import('src/views/cipp/AppApproval'))
//Testing new paths 
const TenantAdministration = React.lazy(() => import('src/views/cipp/AppApproval'))
const SecurityCompliance = React.lazy(() => import('src/views/cipp/AppApproval'))
const Intune = React.lazy(() => import('src/views/cipp/endpoint'))
const OneDriveSharepoint = React.lazy(() => import('src/views/cipp/AppApproval'))

//Hide 
//Tenant Administration
//Security & Compliance
//Intune
//Teams & Sharepoint - Hide onedrive and sharepoint 
//conditional access 
//pending expaing each menu 
const adminRoutes = [
  { path: '/cipp', name: 'CIPP' },
  { path: '/cipp/cipp', name: 'CIPP' },
  { path: '/cipp/settings', name: 'Settings', component: CIPPSettings },
  { path: '/cipp/setup', name: 'Setup', component: Setup },
  { path: '/tenant/administration/gdap', name: 'GDAP Wizard', component: GDAP },
  { path: '/tenant/administration/appapproval', name: 'App Approval', component: appapproval },
  { path: '/tenant/administration/gdap-status', name: 'GDAP Status', component: GDAPStatus },
  { path: '/tenant/standards/apply-standard', name: 'Apply Standard', component: ApplyStandard },
  //Testing New Role paths
  { path: '/tenant/administration/appapproval', name: 'Tenant Administration', component: TenantAdministration },
  { path: '/tenant/administration/gdap-status', name: 'Security Compliance', component: SecurityCompliance },
  { path: '/tenant/standards/apply-standard', name: 'Intune', component: Intune },
  { path: '/tenant/administration/gdap-status', name: 'OneDrive Sharepoint', component: OneDriveSharepoint },
]

export default adminRoutes

