import { Textarea } from "@/components/ui/textarea";
import { format } from "date-fns";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import React, { useState } from "react";
import { CalendarIcon } from "lucide-react";
export default function AddShow() {
  // Inicializa el estado con una fecha indefinida
  const [date, setDate] = useState(undefined);

  // Maneja el cambio de fecha
  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Agregar show</Button>
      </DialogTrigger>
      <DialogContent className="w-full">
        <DialogHeader>
          <DialogTitle>Agrega un show</DialogTitle>
          <DialogDescription>
            Aquí vas a poder agregar un show que tu prefieras en su dicha
            sección
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid sm:grid-cols-2 md:grid-cols-2 items-center justify-center gap-4 md:gap-8 w-full">
            <section className="m-2 flex flex-col items-start">
              <Label htmlFor="tite" className="mb-2">
                Titulo
              </Label>
              <input
                id="title"
                placeholder="titulo"
                className="border rounded-md py-2 px-2 font-semibold focus:outline w-full"
                maxLength={100}
              />
            </section>

            <section className="flex flex-col items-start">
              <Label htmlFor="description" className="mb-2">
                Descripción
              </Label>

              <Textarea
                placeholder="Descripción del show"
                className="resize-none w-full"
                maxLength={1000}
              />
            </section>

            <section className="flex flex-col items-start">
              <Label htmlFor="type" className="mb-2">
                Tipo
              </Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Seleccione tipo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel> </SelectLabel>
                    <SelectItem value="Anime">Animado</SelectItem>
                    <SelectItem value="LiveAction">Live Action</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </section>

            <section className="flex flex-col items-start">
              <Label htmlFor="gender" className="mb-2">
                Genero
              </Label>
              <input
                type="text"
                placeholder="Genero del show"
                className="border rounded-md py-2 px-2 font-semibold focus:outline w-full"
                maxLength={100}
                />
            </section>

            <section className="flex flex-col items-start">
              <Label htmlFor="plot" className="mb-2">
                Trama
              </Label>
              <Textarea
                placeholder="Trama del show"
                className="resize-none w-full"
                maxLength={5000}
              />
            </section>

            <section className="flex flex-col items-start">
              <Label htmlFor="releasedate" className="mb-2">
                Fecha de estreno
              </Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "justify-start text-left font-normal w-full",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? (
                      format(date, "PPP")
                    ) : (
                      <span>Seleccione una fecha</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={handleDateChange}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </section>

            <section className=" flex flex-col items-start">
              <Label htmlFor="place" className="mb-2">
                Lugar de producción
              </Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Seleccione lugar" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel> </SelectLabel>
                    <SelectItem value="Argentina">Argentina</SelectItem>
                    <SelectItem value="Uruguay">Uruguay</SelectItem>
                    <SelectItem value="China">China</SelectItem>
                    <SelectItem value="Japón">Japón</SelectItem>
                    <SelectItem value="SurCorea">Corea del Sur</SelectItem>
                    <SelectItem value="NorteCorea">Corea del Norte</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </section>
          </div>
        </div>
        <DialogFooter className="mx-auto">
          <Button type="submit">Crear sitio</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
