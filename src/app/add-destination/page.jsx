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

const AddDestinationPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData(e.currentTarget);
      const destination = Object.fromEntries(formData.entries());

      console.log(destination);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/destination`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(destination),
        }
      );

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
    <div className="p-4 sm:p-6 md:p-8 max-w-4xl mx-auto w-full">
      <h1 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
        Add Destination
      </h1>

      <Card className="w-full">
        <form onSubmit={onSubmit} className="p-4 sm:p-6 md:p-10 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">

            {/* Destination Name */}
            <div className="col-span-1 sm:col-span-2">
              <TextField name="destinationName" isRequired className="w-full">
                <Label>Destination Name</Label>
                <Input
                  placeholder="Bali Paradise"
                  className="rounded-2xl w-full"
                />
                <FieldError />
              </TextField>
            </div>

            {/* Country */}
            <div className="col-span-1">
              <TextField name="country" isRequired className="w-full">
                <Label>Country</Label>
                <Input
                  placeholder="Indonesia"
                  className="rounded-2xl w-full"
                />
                <FieldError />
              </TextField>
            </div>

            {/* Category */}
            <div className="col-span-1">
              <Select
                name="category"
                isRequired
                className="w-full"
                placeholder="Select category"
              >
                <Label>Category</Label>
                <Select.Trigger className="rounded-2xl w-full">
                  <Select.Value />
                  <Select.Indicator />
                </Select.Trigger>
                <Select.Popover className="w-full">
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
            <div className="col-span-1">
              <TextField name="price" type="number" isRequired className="w-full">
                <Label>Price (USD)</Label>
                <Input
                  type="number"
                  placeholder="1299"
                  className="rounded-2xl w-full"
                />
                <FieldError />
              </TextField>
            </div>

            {/* Duration */}
            <div className="col-span-1">
              <TextField name="duration" isRequired className="w-full">
                <Label>Duration</Label>
                <Input
                  placeholder="7 Days / 6 Nights"
                  className="rounded-2xl w-full"
                />
                <FieldError />
              </TextField>
            </div>

            {/* Departure Date */}
            <div className="col-span-1 sm:col-span-2">
              <TextField
                name="departureDate"
                type="date"
                isRequired
                className="w-full"
              >
                <Label>Departure Date</Label>
                <Input type="date" className="rounded-2xl w-full" />
                <FieldError />
              </TextField>
            </div>

            {/* Image URL */}
            <div className="col-span-1 sm:col-span-2">
              <TextField name="imageUrl" isRequired className="w-full">
                <Label>Image URL</Label>
                <Input
                  type="url"
                  placeholder="https://example.com/bali-paradise.jpg"
                  className="rounded-2xl w-full"
                />
                <FieldError />
              </TextField>
            </div>

            {/* Description */}
            <div className="col-span-1 sm:col-span-2">
              <TextField name="description" isRequired className="w-full">
                <Label>Description</Label>
                <TextArea
                  placeholder="Describe the travel experience..."
                  className="rounded-3xl w-full min-h-[100px] sm:min-h-[120px]"
                />
                <FieldError />
              </TextField>
            </div>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            variant="outline"
            className="rounded-none w-full bg-cyan-500 text-white text-sm sm:text-base py-2 sm:py-3"
          >
            Add Travel
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default AddDestinationPage;