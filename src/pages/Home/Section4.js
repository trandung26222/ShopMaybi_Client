import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import { FaChevronRight } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { Pagination, Flex, Button } from "antd";
import { getAllProducts } from "~/CallAPI/product";
import { statusFetch } from "~/utils/statusFetch";
import Loading from "~/components/Loading";
import ItemProduct from "~/components/ItemProduct/ItemProduct";

function Section4() {
  var dispatch = useDispatch();
  var Products = useSelector((s) => s.ProductSlice.Products);
  var totalProducts = useSelector((s) => s.ProductSlice.totalProducts);
  var statusProduct = useSelector((s) => s.ProductSlice.status);

  const [page, setPage] = useState(1);
  const [size, setSize] = useState(5);

  useEffect(() => {
    const params = {
      page: page,
      size: size,
    };
    dispatch(getAllProducts(params));
  }, [page, size]);

  var onChangepage = (page) => {
    setPage(page);
  };
  const itemRender = (_, type, originalElement) => {
    if (type === "prev") {
      return <></>;
    }
    if (type === "next") {
      return <></>;
    }
    return originalElement;
  };

  return (
    <section>
      <h2 className="text-[var(--text-color)] text-[2.7em] m-0 line mb-10 ">
        <Link>NEW ARRIVAL - MAYBI's back</Link>
      </h2>

      {statusProduct === statusFetch.LOADING ? (
        <Loading />
      ) : (
        <Grid
          container
          rowSpacing={3}
          columnSpacing={3}
          justifyContent={"flex-center"}
        >
          {Products.map((i) => (
            <Grid item key={i._id} lg={2.4} md={3} sm={3} xs={4}>
              <ItemProduct props={i}></ItemProduct>
            </Grid>
          ))}
        </Grid>
      )}

      <Flex className="my-[30px]" justify="flex-end">
        <Pagination
          pageSize={size}
          current={page}
          onChange={onChangepage}
          total={totalProducts}
          itemRender={itemRender}
        />{" "}
      </Flex>

      <Flex justify="center" className="my-12">
        <Button
          className="flex items-center"
          icon={<FaChevronRight />}
          iconPosition={"end"}
        >
          Xem tất cả
        </Button>
      </Flex>

      <div className="mb-12">
        <img
          src="https://theme.hstatic.net/1000341902/1001140246/14/imgtext_1_img.jpg?v=755"
          alt=""
        />
      </div>
    </section>
  );
}

export default Section4;
