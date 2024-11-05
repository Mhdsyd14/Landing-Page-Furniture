import React, { useState, useEffect } from "react";
import axios from "axios";

const Order = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    province: "",
    regency: "",
    district: "",
    village: "",
  });

  const [errors, setErrors] = useState({});
  const [provinces, setProvinces] = useState([]);
  const [regencies, setRegencies] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [villages, setVillages] = useState([]);

  useEffect(() => {
    const fetchProvinces = async () => {
      try {
        const response = await axios.get(
          "https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json"
        );
        setProvinces(response.data);
      } catch (error) {
        console.error("Error fetching provinces data", error);
      }
    };

    fetchProvinces();
  }, []);

  useEffect(() => {
    const fetchRegencies = async () => {
      if (formData.province) {
        try {
          const selectedProvince = provinces.find(
            (province) => province.name === formData.province
          );
          const response = await axios.get(
            `https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${selectedProvince.id}.json`
          );
          setRegencies(response.data);
        } catch (error) {
          console.error("Error fetching regencies data", error);
        }
      }
    };

    fetchRegencies();
  }, [formData.province, provinces]);

  useEffect(() => {
    const fetchDistricts = async () => {
      if (formData.regency) {
        try {
          const selectedRegency = regencies.find(
            (regency) => regency.name === formData.regency
          );
          const response = await axios.get(
            `https://www.emsifa.com/api-wilayah-indonesia/api/districts/${selectedRegency.id}.json`
          );
          setDistricts(response.data);
        } catch (error) {
          console.error("Error fetching districts data", error);
        }
      }
    };

    fetchDistricts();
  }, [formData.regency, regencies]);

  useEffect(() => {
    const fetchVillages = async () => {
      if (formData.district) {
        try {
          const selectedDistrict = districts.find(
            (district) => district.name === formData.district
          );
          const response = await axios.get(
            `https://www.emsifa.com/api-wilayah-indonesia/api/villages/${selectedDistrict.id}.json`
          );
          setVillages(response.data);
        } catch (error) {
          console.error("Error fetching villages data", error);
        }
      }
    };

    fetchVillages();
  }, [formData.district, districts]);

  const validate = () => {
    let errors = {};

    if (!formData.name) {
      errors.name = "Nama diperlukan";
    }
    if (!formData.address) {
      errors.address = "Alamat diperlukan";
    }
    if (!formData.province) {
      errors.province = "Provinsi diperlukan";
    }
    if (!formData.regency) {
      errors.regency = "Kabupaten diperlukan";
    }
    if (!formData.district) {
      errors.district = "Kecamatan diperlukan";
    }
    if (!formData.village) {
      errors.village = "Desa diperlukan";
    }

    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "province") {
      setFormData({
        ...formData,
        province: value,
        regency: "",
        district: "",
        village: "",
      });
      setRegencies([]);
      setDistricts([]);
      setVillages([]);
    }

    if (name === "regency") {
      setFormData({ ...formData, regency: value, district: "", village: "" });
      setDistricts([]);
      setVillages([]);
    }

    if (name === "district") {
      setFormData({ ...formData, district: value, village: "" });
      setVillages([]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log(formData);
      // Proses submit data di sini
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="flex flex-col p-8">
      <div className="ml-10">
        <h1 className="text-3xl font-playfair font-bold">Payment</h1>
        <h1 className="mt-4">1 From 2 Step</h1>
        <div className="flex flex-row">
          <div className="flex flex-col">
            <div className="h-1 w-[290px] bg-[#C0772C] mt-4" />
            <div className="flex flex-row items-center gap-3 mt-3">
              <h1 className="text-white bg-[#642C0C] w-8 h-8 flex items-center justify-center rounded-full">
                1
              </h1>
              <h1>Set Up Order</h1>
            </div>
          </div>
          <div className="flex flex-col ml-3 opacity-25">
            <div className="h-1 w-[290px] bg-[#C0772C] mt-4" />
            <div className="flex flex-row items-center gap-3 mt-3">
              <h1 className="text-white bg-[#642C0C] w-8 h-8 flex items-center justify-center rounded-full">
                2
              </h1>
              <h1>Pay Order</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-6">
          Di mana Anda mengirimkannya?
        </h1>
        <div className="border border-[#C0772C] p-6 rounded-lg">
          <form className="grid grid-cols-2 gap-6" onSubmit={handleSubmit}>
            <div className="col-span-1">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Nama
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="block w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Masukkan nama Anda"
              />
              {errors.name && (
                <div className="text-red-600 text-sm">{errors.name}</div>
              )}
            </div>
            <div className="col-span-1">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Alamat
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="block w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Masukkan alamat Anda"
              />
              {errors.address && (
                <div className="text-red-600 text-sm">{errors.address}</div>
              )}
            </div>
            <div className="col-span-1">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Provinsi
              </label>
              <select
                name="province"
                value={formData.province}
                onChange={handleChange}
                className="block w-full p-2 border border-gray-300 rounded-lg"
              >
                <option value="">Pilih provinsi</option>
                {provinces.map((province) => (
                  <option key={province.id} value={province.name}>
                    {province.name}
                  </option>
                ))}
              </select>
              {errors.province && (
                <div className="text-red-600 text-sm">{errors.province}</div>
              )}
            </div>
            <div className="col-span-1">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Kabupaten
              </label>
              <select
                name="regency"
                value={formData.regency}
                onChange={handleChange}
                className="block w-full p-2 border border-gray-300 rounded-lg"
              >
                <option value="">Pilih kabupaten</option>
                {regencies.map((regency) => (
                  <option key={regency.id} value={regency.name}>
                    {regency.name}
                  </option>
                ))}
              </select>
              {errors.regency && (
                <div className="text-red-600 text-sm">{errors.regency}</div>
              )}
            </div>
            <div className="col-span-1">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Kecamatan
              </label>
              <select
                name="district"
                value={formData.district}
                onChange={handleChange}
                className="block w-full p-2 border border-gray-300 rounded-lg"
              >
                <option value="">Pilih kecamatan</option>
                {districts.map((district) => (
                  <option key={district.id} value={district.name}>
                    {district.name}
                  </option>
                ))}
              </select>
              {errors.district && (
                <div className="text-red-600 text-sm">{errors.district}</div>
              )}
            </div>
            <div className="col-span-1">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Desa
              </label>
              <select
                name="village"
                value={formData.village}
                onChange={handleChange}
                className="block w-full p-2 border border-gray-300 rounded-lg"
              >
                <option value="">Pilih desa</option>
                {villages.map((village) => (
                  <option key={village.id} value={village.name}>
                    {village.name}
                  </option>
                ))}
              </select>
              {errors.village && (
                <div className="text-red-600 text-sm">{errors.village}</div>
              )}
            </div>
            <div className="col-span-2">
              <button
                type="submit"
                className="w-full bg-[#C0772C] text-white p-3 rounded-lg font-bold"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Order;
