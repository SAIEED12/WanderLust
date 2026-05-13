"use client";
import {
  Button,
  FieldError,
  Input,
  Label,
  ListBox,
  TextArea,
  TextField,
  Select,
  Card,
} from "@heroui/react";
import { toast, Zoom } from "react-toastify";

//get form data
const AddDestinationPage = () => {
  const onSubmit = async (e) => {
  e.preventDefault();

  try {
    const formData = new FormData(e.currentTarget);
    const destination = Object.fromEntries(formData.entries());

    console.log(destination);

    const res = await fetch("http://localhost:8000/destination", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(destination),
    });

    console.log(res);

    if (!res.ok) {
      throw new Error("Failed to add destination");
    }

    const data = await res.json();

    toast.success("Destination Added!", {
      position: "top-right",
      autoClose: 3000,
      theme: "colored",
      transition: Zoom,
    });

  } catch (error) {
    console.log(error);

    toast.error("Something went wrong!");
  }
};
  return (
    <div className="p-5 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold">Add Destination</h1>
      <Card>
        <form onSubmit={onSubmit} className="p-10 space-y-8 w-3xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Destination Name */}
            <div className="md:col-span-2">
              <TextField name="destinationName" isRequired>
                <Label>Destination Name</Label>
                <Input placeholder="Bali Paradise" className="rounded-2xl" />
                <FieldError />
              </TextField>
            </div>

            {/* Country */}
            <TextField name="country" isRequired>
              <Label>Country</Label>
              <Input placeholder="Indonesia" className="rounded-2xl" />
              <FieldError />
            </TextField>

            {/* Category - Updated Select Component */}
            <div>
              <Select
                name="category"
                isRequired
                className="w-full"
                placeholder="Select category"
              >
                <Label>Category</Label>
                <Select.Trigger className="rounded-2xl">
                  <Select.Value />
                  <Select.Indicator />
                </Select.Trigger>
                <Select.Popover>
                  <ListBox>
                    <ListBox.Item id="Beach" textValue="Beach">
                      Beach
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="Mountain" textValue="Mountain">
                      Mountain
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="City" textValue="City">
                      City
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="Adventure" textValue="Adventure">
                      Adventure
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="Cultural" textValue="Cultural">
                      Cultural
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="Luxury" textValue="Luxury">
                      Luxury
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                  </ListBox>
                </Select.Popover>
              </Select>
            </div>

            {/* Price */}
            <TextField name="price" type="number" isRequired>
              <Label>Price (USD)</Label>
              <Input type="number" placeholder="1299" className="rounded-2xl" />
              <FieldError />
            </TextField>

            {/* Duration */}
            <TextField name="duration" isRequired>
              <Label>Duration</Label>
              <Input placeholder="7 Days / 6 Nights" className="rounded-2xl" />
              <FieldError />
            </TextField>

            {/* Departure Date */}
            <div className="md:col-span-2">
              <TextField name="departureDate" type="date" isRequired>
                <Label>Departure Date</Label>
                <Input type="date" className="rounded-2xl" />
                <FieldError />
              </TextField>
            </div>

            {/* Image URL - Removed preview */}
            <div className="md:col-span-2">
              <TextField name="imageUrl" isRequired>
                <Label>Image URL</Label>
                <Input
                  type="url"
                  placeholder="https://example.com/bali-paradise.jpg"
                  className="rounded-2xl"
                />
                <FieldError />
              </TextField>
            </div>

            {/* Description */}
            <div className="md:col-span-2">
              <TextField name="description" isRequired>
                <Label>Description</Label>
                <TextArea
                  placeholder="Describe the travel experience..."
                  className="rounded-3xl"
                />
                <FieldError />
              </TextField>
            </div>
          </div>

          {/* Buttons */}

          <Button
            type="submit"
            variant="outline"
            //   isLoading={isPending}
            className=" rounded-none w-full bg-cyan-500 text-white"
          >
            {/* {isPending ? "Adding Package..." : "Add Travel Package"} */}
            Add Travel
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default AddDestinationPage;
