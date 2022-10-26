import React from "react";
import { Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";

type Props = {
  labels: Array<string>,
  data: Array<number>,
}

const GLineChart = ({ data, labels }: Props) =>  (
        <LineChart
          data={{
            labels: labels,
            datasets: [
              {
                data: data,
                strokeWidth: 2,
              },
            ],
          }}
          width={Dimensions.get('window').width - 16}
          height={220}
          chartConfig={{
            backgroundColor: '#1cc910',
            backgroundGradientFrom: '#eff3ff',
            backgroundGradientTo: '#efefef',
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
    )

export default GLineChart