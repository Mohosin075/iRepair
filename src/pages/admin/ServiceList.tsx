import { gerServices } from "@/api/admin/services/services.api";
import { useQuery } from "@tanstack/react-query";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import Container from "@/components/Container";
import { Delete, Trash } from "lucide-react";
import { useGetServices } from "@/api/admin/services/services.hooks";

function ServiceList() {
  const { isLoading, data: services } = useGetServices();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <Container className="mt-20 border overflow-x-auto p-0">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Price</TableHead>
            <TableHead className="text-right">Delete</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {services.map((service) => (
            <TableRow>
              <TableCell>{service.name}</TableCell>
              <TableCell>{service.description}</TableCell>
              <TableCell>{service.price}</TableCell>
              <TableCell className="text-right">
                <Button variant="destructive" className="p-3">
                  <Trash></Trash>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
}

export default ServiceList;
