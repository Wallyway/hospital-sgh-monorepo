"use client";

import * as React from "react";
import { ChevronDownIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface Calendar24Props {
  date?: Date;
  onDateChange?: (date: Date | undefined) => void;
  showTime?: boolean;
  time?: string;
  onTimeChange?: (time: string) => void;
}

export function Calendar24({ 
  date, 
  onDateChange, 
  showTime = true, 
  time = "10:30:00", 
  onTimeChange 
}: Calendar24Props) {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="flex gap-4">
      <div className="flex flex-col gap-3">
        <Label htmlFor="date-picker" className="px-1">
          Fecha
        </Label>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              id="date-picker"
              className="w-32 justify-between font-normal"
            >
              {date ? date.toLocaleDateString() : "Select date"}
              <ChevronDownIcon />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto overflow-hidden p-0" align="start">
            <Calendar
              mode="single"
              selected={date}
              captionLayout="dropdown"
              onSelect={(selectedDate: Date | undefined) => {
                onDateChange?.(selectedDate);
                setOpen(false);
              }}
            />
          </PopoverContent>
        </Popover>
      </div>
      {showTime && (
        <div className="flex flex-col gap-3">
          <Label htmlFor="time-picker" className="px-1">
            Hora
          </Label>
          <Input
            type="time"
            id="time-picker"
            step="1"
            value={time}
            onChange={(e) => onTimeChange?.(e.target.value)}
            className="bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
          />
        </div>
      )}
    </div>
  );
} 