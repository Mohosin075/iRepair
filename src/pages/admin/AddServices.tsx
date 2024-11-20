import { Button } from "@/components/ui/button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FormEvent, useState } from "react";

function AddServices() {
  const [serviceName, setServiceName] = useState("");

  const QueryClient = useQueryClient()

  const {mutateAsync, isError, isSuccess} = useMutation({
    mutationFn: async (data) => {
      return await fetch("http://localhost:5000/api/v1/services", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });


    },
    onSuccess : () =>{
      QueryClient.invalidateQueries({queryKey : ['services']})
    }
  });

  console.log({isError, isSuccess});
  
  const handleSubmit = async(e: FormEvent) => {
    e.preventDefault();

    const serviceData = {
      name: serviceName,
      description: "Replace and dead chep",
      devices: ["Macbook Pro", "Macbook air"],
      price: 500,
    };

    await mutateAsync(serviceData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setServiceName(e.target.value)} />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}

export default AddServices;
