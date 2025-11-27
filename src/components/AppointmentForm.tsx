import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Calendar } from './ui/calendar';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Calendar as CalendarIcon, Clock, User, Phone, Mail, MessageSquare } from 'lucide-react';

const AppointmentForm = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    time: '',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Appointment booked:', { ...formData, date });
    // Handle form submission
    alert('Kërkesa juaj për termin është dërguar me sukses! Do të kontaktoheni së shpejti.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '12:00', '12:30', '14:00', '14:30', '15:00', '15:30',
    '16:00', '16:30', '17:00', '17:30',
  ];

  const services = [
    'Kontroll i Përgjithshëm',
    'Zbardhimi i Dhëmbëve',
    'Implantologjia',
    'Ortodoncia',
    'Kirurgjia Orale',
    'Higjienë Dentare',
    'Urgjencë Dentare',
  ];

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      {/* Left: Calendar */}
      <Card className="border-none shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CalendarIcon className="w-5 h-5 text-primary" />
            Zgjidhni Datën
          </CardTitle>
          <CardDescription>
            Zgjidhni datën që ju përshtatet më mirë për vizitën tuaj
          </CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center">
          <div className="w-[90%]">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border w-full"
              disabled={(date) => date < new Date() || date.getDay() === 0}
            />
          </div>
        </CardContent>
      </Card>

      {/* Right: Form */}
      <Card className="border-none shadow-lg">
        <CardHeader>
          <CardTitle>Detajet e Terminit</CardTitle>
          <CardDescription>
            Plotësoni të dhënat tuaja për të rezervuar terminin
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="flex items-center gap-2 text-sm font-medium mb-2">
                <User className="w-4 h-4 text-primary" />
                Emri dhe Mbiemri
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Emri juaj i plotë"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="flex items-center gap-2 text-sm font-medium mb-2">
                <Mail className="w-4 h-4 text-primary" />
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="email@example.com"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="flex items-center gap-2 text-sm font-medium mb-2">
                <Phone className="w-4 h-4 text-primary" />
                Telefoni
              </label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+383 XX XXX XXX"
                required
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium mb-2">
                <MessageSquare className="w-4 h-4 text-primary" />
                Lloji i Shërbimit
              </label>
              <Select onValueChange={(value) => handleSelectChange('service', value)} required>
                <SelectTrigger>
                  <SelectValue placeholder="Zgjidhni shërbimin" />
                </SelectTrigger>
                <SelectContent>
                  {services.map((service) => (
                    <SelectItem key={service} value={service}>
                      {service}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium mb-2">
                <Clock className="w-4 h-4 text-primary" />
                Ora e Preferuar
              </label>
              <Select onValueChange={(value) => handleSelectChange('time', value)} required>
                <SelectTrigger>
                  <SelectValue placeholder="Zgjidhni orën" />
                </SelectTrigger>
                <SelectContent>
                  {timeSlots.map((time) => (
                    <SelectItem key={time} value={time}>
                      {time}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label htmlFor="notes" className="text-sm font-medium mb-2 block">
                Shënime Shtesë (Opsionale)
              </label>
              <Textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                placeholder="A keni ndonjë kërkesë të veçantë?"
                rows={3}
              />
            </div>

            <Button type="submit" className="w-full" size="lg">
              Konfirmo Terminin
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AppointmentForm;
