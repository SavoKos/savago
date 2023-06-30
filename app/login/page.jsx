import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function Login() {
  return (
    <main className='container'>
      <Navigation />
      <Tabs defaultValue='login' className='login'>
        <TabsList className='w-full grid-cols-2 flex bg-primary text-white'>
          <TabsTrigger value='login'>Login</TabsTrigger>
          <TabsTrigger value='register'>Register</TabsTrigger>
        </TabsList>
        <TabsContent value='login'>
          <Card>
            <CardHeader>
              <CardTitle>Login</CardTitle>
            </CardHeader>
            <CardContent className='space-y-2'>
              <div className='space-y-1'>
                <Label htmlFor='email'>Email</Label>
                <Input id='email' type='email' />
              </div>
              <div className='space-y-1'>
                <Label htmlFor='password'>Passowrd</Label>
                <Input id='password' defaultValue='' />
              </div>
            </CardContent>
            <CardFooter>
              <Button className='text-white'>Login</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value='register'>
          <Card>
            <CardHeader>
              <CardTitle>Register</CardTitle>
            </CardHeader>
            <CardContent className='space-y-2'>
              <div className='space-y-1'>
                <Label htmlFor='email'>Email</Label>
                <Input id='email' type='email' />
              </div>
              <div className='space-y-1'>
                <Label htmlFor='pass1'>Password</Label>
                <Input id='pass1' type='password' />
              </div>
              <div className='space-y-1'>
                <Label htmlFor='pass2'>Confirm password</Label>
                <Input id='pass2' type='password' />
              </div>
            </CardContent>
            <CardFooter>
              <Button className='text-white'>Register</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  );
}
