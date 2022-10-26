export type ApiResponse = {
    success: boolean,
    data?: {
        plan: Array<SolorPlanData>,
        real: Array<SolorRealData>,
    }
}

export type SolorPlanData = {
    ac_balance: number,
    consumption: number,
    frequency: number,
    losses: number,
    production: number,
    production_renewable: number,
    production_renewable_operator: number,
    solar_energy_forecast: number,
    solar_energy_forecast_operator: number,
    system_balance: number,
    timestamp: number
  }

  export type SolorRealData = {
    ac_balance: number,
    consumption: number,
    frequency: number,
    losses: number,
    production: number,
    production_renewable: number,
    solar_energy_production: number,
    system_balance: number,
    timestamp: number
  }