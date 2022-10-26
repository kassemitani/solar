import React, { useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';
import getSoloarService from '../../services/getSolarService'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { ApiResponse } from '../../services/types';
import GLineChart from '../../components/GLineChart';
import styles from './styles'
import { useCallback } from 'react';

const HomeScreen = () => {

    const [data, setData] = useState<Array<number>>()
    const [labels, setLabels] = useState<Array<string>>()
    const [isStartDatePickerVisible, setStartDatePickerVisibility] = useState(false);
    const [isEndDatePickerVisible, setEndDatePickerVisibility] = useState(false);
    const [startDate, setStartDate]= useState<Date>(new Date());

    const addHours = useCallback((numOfHours: number, date = new Date()) => {
        date.setTime(date.getTime() + numOfHours * 60 * 60 * 1000)
        return date
    },[])

    const result = addHours(20);
    const [endDate, setEndDate]  = useState<Date>(result);
  
    useEffect(() => {
      getSoloarService(startDate.toISOString(), endDate.toISOString()).then((result: ApiResponse) => {
        const plan = result.data?.plan
        if(plan){
          const dates = plan.map(({ timestamp }) => new Date(timestamp*1000).getHours().toString())
          const solar = plan.map(({ solar_energy_forecast }) => solar_energy_forecast)
          setData(solar)
          setLabels(dates)
        }
      })
    }, [endDate, startDate])


    const showStartDatePicker = () => {
        setStartDatePickerVisibility(true)
    }

    const showEndDatePicker = () => {
        setStartDatePickerVisibility(true)
    }
  
    const hideStartDatePicker = () => {
      setStartDatePickerVisibility(false)
    }
  
    const hideEndDatePicker = () => {
      setEndDatePickerVisibility(false)
    }

    if(data && labels){
        return (
        <>
            <DateTimePickerModal
                isVisible={isStartDatePickerVisible}
                mode="datetime"
                date={startDate}
                onConfirm={(date)=>{
                setStartDate(date)
                hideStartDatePicker()}}
                onCancel={hideStartDatePicker}
            />
            <DateTimePickerModal
                isVisible={isEndDatePickerVisible}
                mode="datetime"
                date={endDate}
                onConfirm={(date)=>{
                    setEndDate(date)
                    hideEndDatePicker()
                }}
                onCancel={hideEndDatePicker}
            />
            <View style={styles.header}>
                <Button title={startDate.toDateString()} onPress={showStartDatePicker} />
                <Button title={endDate.toDateString()} onPress={showEndDatePicker} />
            </View>
            <GLineChart data={data} labels={labels} />
        </>)
      }
    
      return  <Text>Loading...</Text>
}

export default HomeScreen