import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    format: 'online',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо за запись! Я свяжусь с вами в ближайшее время.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-secondary/20 to-white">
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-border">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">Гипнотерапия</h1>
          <div className="hidden md:flex gap-6 items-center">
            <a href="#about" className="text-sm hover:text-primary transition-colors">Обо мне</a>
            <a href="#services" className="text-sm hover:text-primary transition-colors">Услуги</a>
            <a href="#reviews" className="text-sm hover:text-primary transition-colors">Отзывы</a>
            <a href="#articles" className="text-sm hover:text-primary transition-colors">Статьи</a>
            <a href="#booking" className="text-sm hover:text-primary transition-colors">Запись</a>
            <a href="#contacts" className="text-sm hover:text-primary transition-colors">Контакты</a>
          </div>
        </nav>
      </header>

      <main className="pt-20">
        <section className="container mx-auto px-6 py-24 text-center animate-fade-in">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 text-sm px-4 py-1">Профессиональная гипнотерапия</Badge>
            <h2 className="text-6xl font-bold mb-6 text-foreground leading-tight">
              Путь к внутренней гармонии
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Помогу вам освободиться от тревоги, страхов и вредных привычек через безопасную и эффективную гипнотерапию
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="px-8" onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}>
                <Icon name="Calendar" className="mr-2" size={20} />
                Записаться на сеанс
              </Button>
              <Button size="lg" variant="outline" className="px-8" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
                Узнать больше
              </Button>
            </div>
          </div>
          <div className="mt-16 animate-fade-in-delay">
            <img 
              src="https://cdn.poehali.dev/projects/6668de9c-102c-4c69-b83c-dfee794fd207/files/254fc8d8-4971-4f38-9dfd-9cf63c6f1ba5.jpg" 
              alt="Спокойная атмосфера для гипнотерапии"
              className="rounded-3xl shadow-2xl w-full max-w-4xl mx-auto object-cover h-[500px]"
            />
          </div>
        </section>

        <section id="about" className="container mx-auto px-6 py-24">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <img 
                src="https://cdn.poehali.dev/projects/6668de9c-102c-4c69-b83c-dfee794fd207/files/eee86817-75c0-4209-9375-74166335aa21.jpg" 
                alt="Профессиональный гипнотерапевт"
                className="rounded-3xl shadow-xl w-full object-cover h-[600px]"
              />
            </div>
            <div className="space-y-6">
              <Badge variant="secondary">Обо мне</Badge>
              <h3 className="text-5xl font-bold">Елена Волкова</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Сертифицированный гипнотерапевт с 12-летним опытом работы. Помогла более 500 клиентам 
                справиться с тревожностью, фобиями, зависимостями и психосоматическими расстройствами.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="Award" className="text-primary mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Образование</h4>
                    <p className="text-muted-foreground">Московский институт психоанализа, сертификат Европейской ассоциации гипнотерапевтов</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Heart" className="text-primary mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Подход</h4>
                    <p className="text-muted-foreground">Эриксоновский гипноз, когнитивно-поведенческая терапия, регрессивная гипнотерапия</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Users" className="text-primary mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Опыт</h4>
                    <p className="text-muted-foreground">Более 3000 проведенных сеансов, регулярное участие в международных конференциях</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="bg-muted/50 py-24">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-4">Услуги</Badge>
              <h3 className="text-5xl font-bold mb-6">Методы работы</h3>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Индивидуальный подход к каждому клиенту с использованием современных техник гипнотерапии
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: 'Brain',
                  title: 'Работа с тревогой и стрессом',
                  description: 'Освобождение от хронической тревожности, панических атак и стрессовых состояний через глубинную работу с подсознанием.',
                  duration: '60 минут',
                  price: '5 000 ₽'
                },
                {
                  icon: 'Ban',
                  title: 'Избавление от зависимостей',
                  description: 'Работа с курением, перееданием, игровой зависимостью и другими нежелательными паттернами поведения.',
                  duration: '90 минут',
                  price: '7 000 ₽'
                },
                {
                  icon: 'Ghost',
                  title: 'Лечение фобий и страхов',
                  description: 'Эффективное устранение специфических фобий, страхов и ограничивающих убеждений за 1-3 сеанса.',
                  duration: '75 минут',
                  price: '6 000 ₽'
                },
                {
                  icon: 'Moon',
                  title: 'Улучшение сна',
                  description: 'Решение проблем с бессонницей, кошмарами и другими нарушениями сна через гипнотические техники.',
                  duration: '60 минут',
                  price: '5 000 ₽'
                },
                {
                  icon: 'TrendingUp',
                  title: 'Повышение уверенности',
                  description: 'Работа с самооценкой, уверенностью в себе и преодоление социальных страхов для личного роста.',
                  duration: '60 минут',
                  price: '5 500 ₽'
                },
                {
                  icon: 'Video',
                  title: 'Онлайн консультации',
                  description: 'Полноценные сеансы гипнотерапии через защищенное видео-соединение из любой точки мира.',
                  duration: '60 минут',
                  price: '4 500 ₽'
                }
              ].map((service, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-shadow duration-300 animate-scale-in">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Icon name={service.icon} className="text-primary" size={28} />
                    </div>
                    <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">{service.duration}</span>
                      <span className="font-semibold text-lg text-primary">{service.price}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="reviews" className="container mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Отзывы</Badge>
            <h3 className="text-5xl font-bold mb-6">Что говорят клиенты</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Мария К.',
                text: 'После многих лет борьбы с паническими атаками я наконец-то нашла помощь. Елена помогла мне всего за 4 сеанса. Теперь я живу полноценной жизнью без страха.',
                rating: 5
              },
              {
                name: 'Алексей В.',
                text: 'Бросил курить после 15 лет зависимости! Не верил, что это возможно, но гипнотерапия действительно работает. Спасибо за профессионализм.',
                rating: 5
              },
              {
                name: 'Ольга М.',
                text: 'Онлайн-сеансы оказались такими же эффективными, как очные. Решила проблему с бессонницей, которая мучила меня годами. Рекомендую!',
                rating: 5
              }
            ].map((review, idx) => (
              <Card key={idx} className="animate-fade-in">
                <CardHeader>
                  <div className="flex gap-1 mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-primary fill-primary" size={18} />
                    ))}
                  </div>
                  <CardTitle className="text-xl">{review.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="articles" className="bg-muted/50 py-24">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-4">Статьи</Badge>
              <h3 className="text-5xl font-bold mb-6">Полезные материалы</h3>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Узнайте больше о гипнотерапии и методах работы с подсознанием
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {[
                {
                  title: 'Что такое гипнотерапия и как она работает',
                  description: 'Развенчиваем мифы о гипнозе и объясняем научную основу метода',
                  date: '15 ноября 2024',
                  readTime: '5 мин'
                },
                {
                  title: 'Как подготовиться к первому сеансу гипнотерапии',
                  description: 'Практические рекомендации для эффективной работы',
                  date: '8 ноября 2024',
                  readTime: '4 мин'
                },
                {
                  title: 'Гипноз vs медитация: в чем разница',
                  description: 'Сравнение методов и их применение в психотерапии',
                  date: '1 ноября 2024',
                  readTime: '6 мин'
                },
                {
                  title: 'Онлайн-гипнотерапия: мифы и реальность',
                  description: 'Почему дистанционные сеансы работают так же эффективно',
                  date: '25 октября 2024',
                  readTime: '5 мин'
                }
              ].map((article, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-shadow duration-300 cursor-pointer group">
                  <CardHeader>
                    <CardTitle className="text-2xl mb-3 group-hover:text-primary transition-colors">
                      {article.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed mb-4">
                      {article.description}
                    </CardDescription>
                    <div className="flex gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Icon name="Calendar" size={16} />
                        {article.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Icon name="Clock" size={16} />
                        {article.readTime}
                      </span>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="booking" className="container mx-auto px-6 py-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">Запись на сеанс</Badge>
              <h3 className="text-5xl font-bold mb-6">Начните свой путь к изменениям</h3>
              <p className="text-xl text-muted-foreground">
                Заполните форму, и я свяжусь с вами для подбора удобного времени
              </p>
            </div>
            
            <Card className="shadow-xl">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Ваше имя</label>
                      <Input 
                        placeholder="Как к вам обращаться" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Телефон</label>
                      <Input 
                        placeholder="+7 (___) ___-__-__" 
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input 
                      placeholder="your@email.com" 
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="bg-accent/30 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon name="Video" className="text-primary" size={20} />
                        <span className="font-medium">Онлайн-консультация</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        <Icon name="Check" className="inline mr-1" size={16} />
                        Сеанс проводится через защищенное видео-соединение Zoom
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        <Icon name="Check" className="inline mr-1" size={16} />
                        Вам понадобится тихое комфортное место и стабильный интернет
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Опишите вашу ситуацию</label>
                    <Textarea 
                      placeholder="Расскажите, с чем бы вы хотели поработать..." 
                      className="min-h-32"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    <Icon name="Send" className="mr-2" size={20} />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="contacts" className="bg-muted/50 py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Badge variant="secondary" className="mb-4">Контакты</Badge>
                <h3 className="text-5xl font-bold mb-6">Свяжитесь со мной</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <Icon name="Mail" className="text-primary mb-3" size={32} />
                    <CardTitle>Email</CardTitle>
                    <CardDescription className="text-base">ru7.1@ya.ru
Отвечаю в течение 24 часов</CardDescription>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <Icon name="MessageCircle" className="text-primary mb-3" size={32} />
                    <CardTitle>Мессенджеры для связи через текстовые и голосовые сообщения</CardTitle>
                    <CardDescription className="text-base">Telegram: +7 952 775 2182 или @warrior107 МАКС: +7 952 775 2182

На все сообщения отвечаю в порядке очереди.</CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Гипнотерапия</h2>
          <p className="text-background/70 mb-6">Профессиональная помощь в решении психологических проблем</p>
          <div className="flex justify-center gap-6 mb-6 flex-wrap">
            <a href="#about" className="text-background/70 hover:text-background transition-colors">Обо мне</a>
            <a href="#services" className="text-background/70 hover:text-background transition-colors">Услуги</a>
            <a href="#reviews" className="text-background/70 hover:text-background transition-colors">Отзывы</a>
            <a href="#booking" className="text-background/70 hover:text-background transition-colors">Запись</a>
          </div>
          <p className="text-sm text-background/50">© 2024 Елена Волкова. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}