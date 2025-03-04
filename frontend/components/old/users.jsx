/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/3DiO2NIkqoO
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
"use client"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"
import { getUsers } from "@/apis/api"
import React, { useState, useEffect} from 'react';
import { useContext } from "react"
import { UserContext } from "@/contexts/user-context"
import { CollectorContext } from "@/contexts/collector-context" 

export function UsersPage() {
const { allUsers } = useContext(UserContext);
const { allCollectors } = useContext(CollectorContext);
console.log(allCollectors);


  return (
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>All Users</CardTitle>
                <CardDescription>View and manage all registered users.</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Address</TableHead>
                      <TableHead>Mobile</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                     { allUsers.map((user) => (
                    <TableRow key={user._id}>
                          <TableCell>{user.name}</TableCell>
                          <TableCell>{user.email}</TableCell>
                          <TableCell>{user.address}</TableCell>
                          <TableCell>{user.mobile}</TableCell>
                          <TableCell>
                            <Button variant="outline" size="sm">
                              View
                            </Button>
                            <Button variant="outline" size="sm" className="ml-2">
                              Edit
                            </Button>
                          </TableCell>
                    </TableRow>))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Register New User</CardTitle>
                <CardDescription>Add a new user to the system.</CardDescription>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" type="text" placeholder="Enter user name" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Enter user email" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="role">Role</Label>
                      <Select id="role">
                        <option value="admin">Admin</option>
                        <option value="user">User</option>
                      </Select>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="status">Status</Label>
                      <Select id="status">
                        <option value="active">Active</option>
                        <option value="pending">Pending</option>
                      </Select>
                    </div>
                    <Button type="submit" className="justify-self-end">
                      Register User
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </main>
  );
}



















