'use client';

import { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

export default function Calendar() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date(),
  );

  return (
    <DayPicker
      mode="single"
      captionLayout="dropdown"
      fromYear={2024}
      toYear={2024}
      showOutsideDays
      required
      selected={selectedDate}
      onSelect={setSelectedDate}
    />
  );
}
